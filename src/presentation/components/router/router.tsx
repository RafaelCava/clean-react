import Login from '@/presentation/pages/login/login'
import { type Validation } from '@/presentation/protocols/validation'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

class ValidationStub implements Validation {
  validate (fieldName: string, fieldValue: string): string | null {
    return null
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/login' element={<Login validation={new ValidationStub()} />} />
  )
)

export default router
