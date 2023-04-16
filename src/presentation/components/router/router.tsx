import { type Authentication } from '@/domain/usecases'
import Login from '@/presentation/pages/login/login'
import { type Validation } from '@/presentation/protocols/validation'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

class ValidationStub implements Validation {
  validate (fieldName: string, fieldValue: string): string | null {
    return null
  }
}

class AuthenticationStub implements Authentication {
  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    return await Promise.resolve(null as any)
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/login' element={<Login validation={new ValidationStub()} authentication={new AuthenticationStub()} />} />
  )
)

export default router
