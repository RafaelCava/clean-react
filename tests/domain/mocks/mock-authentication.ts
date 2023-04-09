import { type Authentication } from '@/domain/usecases'
import { faker } from '@faker-js/faker'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationResult = (): Authentication.Result => ({
  accessToken: faker.datatype.uuid(),
  name: faker.internet.userName()
})
