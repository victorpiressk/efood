import { useState } from 'react'
import { CardContainer } from './styles'
import Button from '../Button'
import { Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'
import imgPizza from '../../assets/images/pizza.png'

export interface ModalState {
  isVisible: boolean
}

export type Props = {
  image: string
  title: string
  score: string
  description: string
}

const CardPerfil = ({ image, title, description }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <CardContainer>
        <div className="container">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
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
