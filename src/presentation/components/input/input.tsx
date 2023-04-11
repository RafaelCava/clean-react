/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context) as any
  const error = errorState?.[props.name as string]
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }
  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }
  return (
    <div className={Styles.inputWrap}>
      <input { ...props } readOnly onFocus={enableInput} />
      <span title={getTitle()} data-testid={`${props.name}-status`} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
