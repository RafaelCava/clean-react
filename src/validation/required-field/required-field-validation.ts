import { type Validation } from '@/presentation/protocols'

export class RequiredFieldValidation implements Validation {
  validate (fieldName: string, fieldValue: string): string | null {
    return fieldValue ? null : 'Campo obrigatório'
  }
}
