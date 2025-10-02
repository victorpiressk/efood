import { ButtonContainer, ButtonLink } from './styles'
import React from 'react'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant: 'home' | 'perfil'
  fullWidth?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant,
  fullWidth
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
        fullWidth={fullWidth}
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
