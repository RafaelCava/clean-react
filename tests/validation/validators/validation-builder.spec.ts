import { RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const field = 'any_field'
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })
})
