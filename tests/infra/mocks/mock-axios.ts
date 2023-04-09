import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockedAxiosResult = (): any => ({
  data: faker.random.alphaNumeric(12),
  status: faker.internet.httpStatusCode()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockedAxiosResult())
  return mockedAxios
}
