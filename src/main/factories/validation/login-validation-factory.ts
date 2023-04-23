import { type Validation } from '@/presentation/protocols'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLoginValidation = (): Validation => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
}
