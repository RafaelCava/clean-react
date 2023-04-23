import { RemoteAuthentication } from '@/data/usecases'
import { type Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from './axios-http-client-factory'
import { makeApiUrl } from './api-url-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('login'), makeAxiosHttpClient())
}
