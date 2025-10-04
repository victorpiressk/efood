import { useDispatch, useSelector } from 'react-redux'
import { ContainerHeader, Title } from './styles'
import logo from '../../assets/images/logo-efood.png'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type Props = {
  variant: 'home' | 'perfil'
}

const Header = ({ variant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
        <h2 onClick={openCart}>{items.length} produto(s) no carrinho</h2>
      </div>
    </ContainerHeader>
  )
}

export default Header
