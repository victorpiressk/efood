import { ButtonContainer, ButtonLink } from './styles'

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant,
  fullWidth,
  disabled
}: ButtonProps) => {
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
