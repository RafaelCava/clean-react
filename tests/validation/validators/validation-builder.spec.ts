import { EmailValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'

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
})
