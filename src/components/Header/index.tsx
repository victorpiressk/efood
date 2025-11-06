import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'
import logo from '../../assets/images/logo-efood.png'
import { ContainerHeader, Title } from './styles'

const Header = ({ variant }: VariantProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const handleOpenCart = () => {
    dispatch(openCart())
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
        <h2 onClick={handleOpenCart}>{items.length} produto(s) no carrinho</h2>
      </div>
    </ContainerHeader>
  )
}

export default Header
