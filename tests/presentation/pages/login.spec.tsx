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
})
