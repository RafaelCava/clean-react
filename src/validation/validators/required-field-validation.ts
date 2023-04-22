import { type FieldValidation } from '../protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error | null {
    return value ? null : new Error('Campo obrigatório')
  }
}
