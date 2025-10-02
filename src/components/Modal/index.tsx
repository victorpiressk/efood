import { useState } from 'react'
import { ModalContent, ModalContainer } from './styles'
import Button from '../Button'
import close from '../../assets/images/close.png'
import imgPizza from '../../assets/images/pizza.png'

export interface ModalState {
  isVisible: boolean
}

const Modal = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <ModalContent className={modal.isVisible ? 'visivel' : ''}>
      <ModalContainer className="container">
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
          <img src={imgPizza} />
          <div>
            <h4>Pizza</h4>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Button
              type="button"
              title="Adicionar ao carrinho"
              variant="perfil"
            >
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </div>
        </main>
      </ModalContainer>
      <div
        className="overlay"
        onClick={() => {
          closeModal()
        }}
      ></div>
    </ModalContent>
  )
}

export default Modal
