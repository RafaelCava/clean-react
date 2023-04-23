import React from 'react'
import { type RenderResult, render } from '@testing-library/react'
import { Input } from '@/presentation/components'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RenderResult
  fieldDefault: string
}

const makeSut = (fieldDefault = faker.database.column()): SutTypes => {
  const sut = render(<Input name={fieldDefault} />)
  return {
    sut,
    fieldDefault
  }
}

describe('Input Component', () => {
  it('should begin with readOnly', () => {
    const { sut, fieldDefault } = makeSut()
    const input = sut.getByTestId(fieldDefault) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  it('should remove readOnly on focus', () => {
    const { sut, fieldDefault } = makeSut()
    const input = sut.getByTestId(fieldDefault) as HTMLInputElement
    input.focus()
    expect(input.readOnly).toBe(false)
  })
})
