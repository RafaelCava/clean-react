import { mockPostParams } from '@/../tests/data/mocks'
import { AxiosHttpClient } from '@/infra/http/axios/axios-http-client'
import { mockAxios, mockedAxiosResult } from '@/tests/infra/mocks'
import type axios from 'axios'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  describe('post()', () => {
    it('should call axios with correct values', async () => {
      const { sut, mockedAxios } = makeSut()
      const postParams = mockPostParams()
      await sut.post(postParams)
      expect(mockedAxios.post).toHaveBeenCalledWith(
        postParams.url,
        postParams.body,
        { headers: postParams.headers }
      )
    })

    it('should return the correct statusCode and body', () => {
      const { sut, mockedAxios } = makeSut()
      const promise = sut.post(mockPostParams())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })

    it('should return the correct statusCode and body on failure', () => {
      const { sut, mockedAxios } = makeSut()
      mockedAxios.post.mockRejectedValueOnce({
        response: mockedAxiosResult()
      })
      const promise = sut.post(mockPostParams())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
  })
})
