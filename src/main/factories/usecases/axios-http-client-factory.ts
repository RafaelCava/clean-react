import { type HttpPostClient } from '@/data/protocols'
import { AxiosHttpClient } from '@/infra/http/axios/axios-http-client'

export const makeAxiosHttpClient = (): HttpPostClient => {
  return new AxiosHttpClient()
}
