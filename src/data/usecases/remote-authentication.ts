import { type Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { HttpStatusCode, type HttpPostClient, type DefaultHeaders } from '@/data/protocols'

export class RemoteAuthentication implements Authentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient<Authentication.Params, DefaultHeaders, Authentication.Result>) {}
  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    type Strategies = Record<number, () => never>
    const strategies: Strategies = {
      [HttpStatusCode.unauthorized]: () => { throw new InvalidCredentialsError() },
      [HttpStatusCode.badRequest]: () => { throw new UnexpectedError() },
      [HttpStatusCode.serverError]: () => { throw new UnexpectedError() },
      [HttpStatusCode.notFound]: () => { throw new UnexpectedError() }
    }
    strategies[response.statusCode]?.()
    return response.body as Authentication.Result
  }
}
