import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CardContainer } from './styles'
import Button from '../Button'
import { Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import { getOverflow } from '../../utils'
import { parseToBrl } from '../../utils'

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
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <>
      <CardContainer>
        <div className="container">
          <img src={product.foto} alt={product.nome} />
          <h3>{product.nome}</h3>
          <p>{getOverflow(product.descricao)}</p>
          <Button
            type="button"
            title="Saiba mais"
            variant="perfil"
            fullWidth={true}
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
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
                variant="perfil"
                onClick={addToCart}
              >
                <span>Adicionar ao carrinho - {parseToBrl(product.preco)}</span>
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
