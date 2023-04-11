import React from 'react'
import { render } from '@testing-library/react'
import { Login } from '@/presentation/pages'

describe('Login', () => {
  it('should render', () => {
    const sut = render(<Login />)
    expect(sut).toBeTruthy()
  })

  it('should not render spinner and error on initial state', () => {
    const sut = render(<Login />)
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  it('should start with initial state', () => {
    const sut = render(<Login />)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  it('should render the correct title on inputs with initial state', () => {
    const sut = render(<Login />)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
