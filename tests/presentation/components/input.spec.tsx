import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '@/presentation/components'

describe('Input Component', () => {
  it('should begin with readOnly', () => {
    const { getByTestId } = render(<Input name="field" />)
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
