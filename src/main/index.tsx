import { router } from '@/presentation/components'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import '../presentation/styles/globals.scss'

ReactDom.render(
  <BrowserRouter>
    <RouterProvider router={router} />
  </BrowserRouter>,
  document.getElementById('main')
)
