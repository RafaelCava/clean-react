import { faker } from '@faker-js/faker'
import { EmailValidation } from '@/validation/validators'
import { InvalidFieldError } from '@/validation/errors'

const makeSut = (): EmailValidation => new EmailValidation('email')

describe('EmailValidation', () => {
  it('should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })
})
