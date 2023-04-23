import { type HttpPostClient } from '@/data/protocols'
import axios from 'axios'

export class AxiosHttpClient<B = any, H = any, R = any> implements HttpPostClient<B, H, R> {
  async post (params: HttpPostClient.Params<B, H>): Promise<HttpPostClient.Result<R>> {
    try {
      const { url, body, headers } = params
      const response = await axios.post<R>(url, body, { headers } as any)
      return {
        statusCode: response.status,
        body: response.data
      }
    } catch (error: any) {
      return {
        statusCode: error.response.status,
        body: error.response.data
      }
    }
  }
}
