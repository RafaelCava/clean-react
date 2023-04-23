import { faker } from '@faker-js/faker'
import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '../mocks/mock-field-validation'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy
}

const makeSut = (): SutTypes => {
  const fieldValidationSpy = new FieldValidationSpy('any_field')
  const sut = new ValidationComposite([fieldValidationSpy])
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  it('should return error if any validation fails', () => {
    const { sut, fieldValidationSpy } = makeSut()
    const messageError = faker.random.words(5)
    fieldValidationSpy.messageError = new Error(messageError)
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe(messageError)
  })
})
