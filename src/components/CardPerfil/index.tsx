import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CardContainer } from './styles'
import Button from '../Button'
import { Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'

export interface ModalState {
  isVisible: boolean
}

type Props = {
  food: Cardapio
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardPerfil = ({ food }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 254) {
      return descricao.slice(0, 251) + '...'
    }

    return descricao
  }

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <>
      <CardContainer>
        <div className="container">
          <img src={food.foto} alt={food.nome} />
          <h3>{food.nome}</h3>
          <p>{getDescricao(food.descricao)}</p>
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
            <img src={food.foto} />
            <div>
              <h4>{food.nome}</h4>
              <p>{food.descricao}</p>
              <p>Serve: {food.porcao}</p>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                variant="perfil"
                onClick={addToCart}
              >
                <span>Adicionar ao carrinho - {formataPreco(food.preco)}</span>
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

export default CardPerfil
