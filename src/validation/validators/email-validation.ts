import { type FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error | null {
    const exp = /^[a-zA-Z0-9._%+-]+(?:\.[a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?<!\.{2})$/g
    if (exp.test(value)) {
      return null
    }
    return new InvalidFieldError()
  }
}
