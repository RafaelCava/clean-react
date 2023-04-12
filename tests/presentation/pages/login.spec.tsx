import React from 'react'
import { Login } from '@/presentation/pages'
import { type Validation } from '@/presentation/protocols/validation'
import { type RenderResult, render, cleanup, fireEvent } from '@testing-library/react'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  input?: object
  errorMessage?: string
  validate (input: object): string | null {
    this.input = input
    return this.errorMessage as string
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { sut } = makeSut()
    expect(sut).toBeTruthy()
  })

  it('should not render spinner and error on initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  it('should start with initial state', () => {
    const { sut } = makeSut()
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  it('should render the correct title on inputs with initial state', () => {
    const { sut } = makeSut()
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })

  it('should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const fakeMail = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: fakeMail } })
    expect(validationSpy.input).toEqual({
      email: fakeMail
    })
  })

  it('should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    const fakePass = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: fakePass } })
    expect(validationSpy.input).toEqual({
      password: fakePass
    })
  })
})
