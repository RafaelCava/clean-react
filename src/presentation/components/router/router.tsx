import { Login } from '@/presentation/pages'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/login' Component={Login} />
  )
)

export default router
