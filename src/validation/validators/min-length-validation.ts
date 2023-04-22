import { type FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '../errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error | null {
    return value.length < this.minLength
      ? new InvalidFieldError()
      : null
  }
}
