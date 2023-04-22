import { RequiredFieldValidation } from '@/validation/validators'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation('any_field')

describe('Required field validation', () => {
  it('should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new Error('Campo obrigatório'))
  })

  it('should return null on succeeds', () => {
    const sut = makeSut()
    const error = sut.validate('any_value')
    expect(error).toBeNull()
  })
})
