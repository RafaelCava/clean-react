import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const field = 'any_field'
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  it('should return EmailValidation', () => {
    const field = 'any_field'
    const validators = sut.field(field).email().build()
    expect(validators).toEqual([new EmailValidation(field)])
  })

  it('should return MinLengthValidation', () => {
    const field = 'any_field'
    const validators = sut.field(field).min(10).build()
    expect(validators).toEqual([new MinLengthValidation(field, 10)])
  })
})
