import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context) as any
  /* istanbul ignore next */
  const error = state?.[`${props.name}Error`]
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }
  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }
  return (
    <div className={Styles.inputWrap}>
      <input { ...props } data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
      <span title={getTitle()} data-testid={`${props.name}-status`} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
