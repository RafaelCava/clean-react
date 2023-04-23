import { type Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { RemoteAuthentication } from '@/data/usecases'
import { HttpStatusCode } from '@/data/protocols'
import { HttpPostClientSpy } from '@/tests/data/mocks'
import { mockAuthenticationParams, mockAuthenticationResult } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

type DefaultHeaders = {
  Accept?: string
  'Content-Type'?: string
  'Access-Control-Allow-Origin'?: string
  'Access-Control-Allow-Headers'?: string
  'Access-Control-Allow-Methods'?: string
}
interface SutTypes {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<Authentication.Params, DefaultHeaders, Authentication.Result>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<Authentication.Params, DefaultHeaders, Authentication.Result>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    const mockParams = mockAuthenticationParams()
    await sut.auth(mockParams)
    expect(httpPostClientSpy.params).toEqual({
      url,
      body: mockParams
    })
  })

  it('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  it('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return an Authentication.Result if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const mockResult = mockAuthenticationResult()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockResult
    }
    const authenticationResult = await sut.auth(mockAuthenticationParams())
    expect(authenticationResult).toEqual(mockResult)
  })
})
