import React from 'react'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/tests/presentation/mocks'
import { type RenderResult, render, cleanup, fireEvent } from '@testing-library/react'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (error: string = ''): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = error
  const sut = render(<Login validation={validationStub} />)
  return {
    sut
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
    const { sut } = makeSut(faker.random.words(5))
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  it('should render the correct title on inputs with initial state', () => {
    const error = faker.random.words(5)
    const { sut } = makeSut(error)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(error)
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(error)
    expect(passwordStatus.textContent).toBe('🔴')
  })

  it('should show email error if Validation fails', () => {
    const error = faker.random.words(5)
    const { sut } = makeSut(error)
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(error)
    expect(emailStatus.textContent).toBe('🔴')
  })

  it('should show password error if Validation fails', () => {
    const error = faker.random.words(5)
    const { sut } = makeSut(error)
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(error)
    expect(passwordStatus.textContent).toBe('🔴')
  })

  it('should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Tudo certo!')
    expect(emailStatus.textContent).toBe('🟢')
  })

  it('should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Tudo certo!')
    expect(passwordStatus.textContent).toBe('🟢')
  })

  it('should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(false)
  })

  it('should show spinner on submit', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitButton = sut.getByTestId('submit')
    fireEvent.click(submitButton)
    const spinner = sut.getByTestId('spinner')
    expect(spinner).toBeTruthy()
  })
})
