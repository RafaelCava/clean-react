import { faker } from '@faker-js/faker'
import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '@/tests/validation/mocks/mock-field-validation'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy
  fieldDefault: string
}

const makeSut = (fieldDefault = faker.database.column()): SutTypes => {
  const fieldValidationSpy = new FieldValidationSpy(fieldDefault)
  const sut = new ValidationComposite([fieldValidationSpy])
  return {
    sut,
    fieldValidationSpy,
    fieldDefault
  }
}

describe('ValidationComposite', () => {
  it('should return error if any validation fails', () => {
    const field = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(field)
    const messageError = faker.random.words(5)
    fieldValidationSpy.messageError = new Error(messageError)
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe(messageError)
  })

  it('should return null if none validation fails', () => {
    const { sut, fieldDefault } = makeSut()
    const error = sut.validate(fieldDefault, faker.random.word())
    expect(error).toBeNull()
  })
})
