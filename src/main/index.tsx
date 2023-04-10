import { router } from '@/presentation/components'
import React from 'react'
import ReactDom from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import '../presentation/styles/globals.scss'

ReactDom.render(
  <RouterProvider router={router} />,
  document.getElementById('main')
)
