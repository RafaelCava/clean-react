import { type FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  constructor (readonly field: string) {}
  value?: string
  messageError: Error | null = null
  validate (value: string): Error | null {
    this.value = value
    return this.messageError
  }
}
