import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import {
  LoginHeader as Header,
  Footer,
  Input,
  FormStatus
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { type Validation } from '@/presentation/protocols/validation'
import { type Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email) as string,
      passwordError: validation.validate('password', state.password) as string
    })
  }, [state.email, state.password])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setState({ ...state, isLoading: true })
    await authentication.auth({
      email: state.email,
      password: state.password
    })
  }
  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name='email' placeholder='Digite seu e-mail'/>
          <Input type="password" name='password' placeholder='Digite seu senha'/>
          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type='submit'>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
