import { type HttpPostClient } from '@/data/protocols'
import { faker } from '@faker-js/faker'

export const mockPostParams = <B = any, H = any>(): HttpPostClient.Params<B, H> => ({
  url: faker.internet.url(),
  body: faker.random.alphaNumeric(12) as B,
  headers: faker.random.alphaNumeric(12) as H
})
