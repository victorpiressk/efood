import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CardContainer } from './styles'
import Button from '../Button'
import close from '../../assets/images/close.png'
import { addItem, openCart } from '../../store/reducers/cart'
import { truncateText, formatToBRL } from '../../utils'
import { Modal, ModalContent } from './styles'

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const addToCart = () => {
    dispatch(addItem(product))
    dispatch(openCart())
  }

  return (
    <>
      <CardContainer>
        <img src={product.foto} alt={product.nome} />
        <h3>{product.nome}</h3>
        <p>{truncateText(product.descricao)}</p>
        <Button
          type="button"
          title="Saiba mais"
          variant="profile"
          fullWidth={true}
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          Adicionar ao carrinho
        </Button>
      </CardContainer>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <main>
            <img src={product.foto} />
            <div>
              <h4>{product.nome}</h4>
              <p>{product.descricao}</p>
              <p>Serve: {product.porcao}</p>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                variant="profile"
                onClick={addToCart}
              >
                <span>
                  Adicionar ao carrinho - {formatToBRL(product.preco)}
                </span>
              </Button>
            </div>
          </main>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default ProductCard
