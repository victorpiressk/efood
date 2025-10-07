import { ButtonContainer, ButtonLink } from './styles'
import React from 'react'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant: 'home' | 'perfil'
  fullWidth?: boolean
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant,
  fullWidth,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} variant={variant} type="link">
      {children}
    </ButtonLink>
  )
}

export default Button
