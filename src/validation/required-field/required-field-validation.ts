interface FieldValidation {
  field: string
  validate: (value: string) => Error | null
}

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error | null {
    return value ? null : new Error('Campo obrigatório')
  }
}
