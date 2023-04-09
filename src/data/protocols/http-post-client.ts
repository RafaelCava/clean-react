import { type HttpResponse } from './http-response'

export interface HttpPostClient<B = any, H = any, R = any> {
  post: (params: HttpPostClient.Params<B, H>) => Promise<HttpPostClient.Result<R>>
}

export namespace HttpPostClient {
  export interface Params<B = any, H = any> {
    url: string
    body?: B
    headers?: H
  }

  export type Result<R = any> = HttpResponse<R>
}
