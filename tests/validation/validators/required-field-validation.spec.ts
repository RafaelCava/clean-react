import { RequiredFieldValidation } from '@/validation/validators'
import { RequiredFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.database.column())

describe('Required field validation', () => {
  it('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return null on succeeds', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeNull()
  })
})
