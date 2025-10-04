import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { Overlay, CartContainer, SideBar, Prices, CartItem } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardPerfil'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span> {formataPreco(getTotalPrice())}
        </Prices>
        <Button
          type="button"
          title="Clique aqui para continuar com a compra"
          variant="perfil"
        >
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
