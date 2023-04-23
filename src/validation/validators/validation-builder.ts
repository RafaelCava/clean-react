import { type FieldValidation } from '@/validation/protocols'
import { RequiredFieldValidation } from './required-field-validation'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (name: string): ValidationBuilder {
    return new ValidationBuilder(name, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
