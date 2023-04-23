import { Router } from '@/presentation/components'
import React from 'react'
import { createRoot } from 'react-dom/client'
import '../presentation/styles/globals.scss'
import { makeLogin } from './factories/pages/login-factory'

createRoot(document.getElementById('main') as HTMLElement).render(
  <Router
    makeLogin={makeLogin}
  />
)
