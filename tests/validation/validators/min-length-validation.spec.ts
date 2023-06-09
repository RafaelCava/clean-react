import { faker } from '@faker-js/faker'
import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation(faker.database.column(), minLength)

describe('MinLengthValidation', () => {
  it('should return error if value is invalid', () => {
    const length = Number(faker.random.numeric())
    const sut = makeSut(length)
    const error = sut.validate(faker.random.alphaNumeric(length - 1))
    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return null if value is valid', () => {
    const length = Number(faker.random.numeric())
    const sut = makeSut(length)
    const error = sut.validate(faker.random.alphaNumeric(length))
    expect(error).toBeNull()
  })
})
