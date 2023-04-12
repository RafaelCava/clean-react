import { createContext } from 'react'

type FormContextProps = {
  state: {
    isLoading: boolean
    emailError: string
    passwordError: string
    mainError: string
    email: string
    password: string
  }

  setState: any
}
export default createContext<FormContextProps>({
  state: {
    isLoading: false,
    emailError: '',
    passwordError: 'Campo obrigatório',
    mainError: '',
    email: '',
    password: ''
  },
  setState: () => {}
})
