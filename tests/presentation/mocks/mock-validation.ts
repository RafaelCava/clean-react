import { type Validation } from '@/presentation/protocols'

export class ValidationStub implements Validation {
  errorMessage?: string
  validate (fieldName: string, fieldValue: string): string | null {
    return this.errorMessage as string
  }
}
