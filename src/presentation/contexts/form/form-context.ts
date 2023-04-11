import { createContext } from 'react'

type FormContextProps = {
  state: {
    isLoading: boolean
  }
  errorState: {
    email: string
    password: string
    main: string
  }
}
export default createContext<FormContextProps>({
  state: {
    isLoading: false
  },
  errorState: {
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  }
})
