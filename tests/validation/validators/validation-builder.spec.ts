import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'
import { faker } from '@faker-js/faker'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  it('should return EmailValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).email().build()
    expect(validators).toEqual([new EmailValidation(field)])
  })

  it('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = Number(faker.random.numeric())
    const validators = sut.field(field).min(length).build()
    expect(validators).toEqual([new MinLengthValidation(field, length)])
  })

  it('should return a list of validations', () => {
    const field = faker.database.column()
    const length = Number(faker.random.numeric())
    const validators = sut.field(field).required().email().min(length).build()
    expect(validators).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLengthValidation(field, length)
    ])
  })
})
