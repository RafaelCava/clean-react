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

  it('should return null if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeNull()
  })

  it('should return null if email is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeNull()
  })
})
