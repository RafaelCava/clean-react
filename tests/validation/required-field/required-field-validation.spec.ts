import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation()

describe('Required field validation', () => {
  it('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('field', '')
    expect(error).toBe('Campo obrigatório')
  })
})
