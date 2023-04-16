
import { type Authentication } from '@/domain/usecases'
import { mockAuthenticationResult } from '@/tests/domain/mocks'

export class AuthenticationSpy implements Authentication {
  params?: Authentication.Params
  authenticationResult: Authentication.Result = mockAuthenticationResult()
  callsCount = 0
  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    this.params = params
    this.callsCount++
    return await Promise.resolve(this.authenticationResult)
  }
}
