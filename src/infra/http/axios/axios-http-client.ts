import { type HttpPostClient } from '@/data/protocols'
import axios, { type AxiosResponse } from 'axios'

export class AxiosHttpClient<B = any, H = any, R = any> implements HttpPostClient<B, H, R> {
  async post (params: HttpPostClient.Params<B, H>): Promise<HttpPostClient.Result<R>> {
    let response: AxiosResponse<R, any>
    try {
      const { url, body, headers } = params
      response = await axios.post<R>(url, body, { headers } as any)
    } catch (error: any) {
      response = error.response
    }
    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
