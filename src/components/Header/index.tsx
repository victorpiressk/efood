import { ContainerHeader, Title } from './styles'
import logo from '../../assets/images/logo-efood.png'
import { Link } from 'react-router-dom'

export type Props = {
  variant: 'home' | 'perfil'
}

const Header = ({ variant }: Props) => {
  if (variant === 'home') {
    return (
      <ContainerHeader variant={variant}>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
          <Title>
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </Title>
        </div>
      </ContainerHeader>
    )
  }

  return (
    <ContainerHeader variant={variant}>
      <div className="container">
        <h2>Restaurantes</h2>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <h2>0 produto(s) no carrinho</h2>
      </div>
    </ContainerHeader>
  )
}

export default Header
