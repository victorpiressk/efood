import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant: 'home' | 'perfil'
}

const Button = ({ type, title, to, onClick, children, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
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
