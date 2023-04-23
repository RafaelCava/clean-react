import { RemoteAuthentication } from '@/data/usecases'
import { type Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from './axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  const url = `${process.env.API_URL}/login`
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
