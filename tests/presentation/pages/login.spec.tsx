import React from 'react'
import { render } from '@testing-library/react'
import { Login } from '@/presentation/pages'

describe('Login', () => {
  it('should render', () => {
    const sut = render(<Login />)
    expect(sut).toBeTruthy()
  })
})
