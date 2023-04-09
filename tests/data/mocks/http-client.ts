import { HttpStatusCode, type HttpPostClient, type HttpResponse } from '@/data/protocols'

export class HttpPostClientSpy<B = any, H = any, R = any> implements HttpPostClient<B, H, R> {
  params?: HttpPostClient.Params<B, H>
  response?: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params<B, H>): Promise<HttpPostClient.Result<R>> {
    this.params = params
    return await Promise.resolve(this.response as HttpPostClient.Result<R>)
  }
}
