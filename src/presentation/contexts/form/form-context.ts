import { createContext } from 'react'

type FormContextProps = {
  isLoading: boolean
  errorMessage: string
}
export default createContext<FormContextProps>({ isLoading: false, errorMessage: '' })
