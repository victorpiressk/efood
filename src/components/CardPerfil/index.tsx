import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CardContainer } from './styles'
import Button from '../Button'
import { Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'

export interface ModalState {
  isVisible: boolean
}

export type Props = {
  id: number
  image: string
  title: string
  description: string
  price: number
  portion: string
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardPerfil = ({
  image,
  title,
  description,
  price,
  portion,
  id
}: Props) => {
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

  return (
    <>
      <CardContainer>
        <div className="container">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{getDescricao(description)}</p>
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
            <img src={image} />
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <p>Serve: {portion}</p>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                variant="perfil"
              >
                <span>
                  <Link to={`/perfil/${id}`}>
                    Adicionar ao carrinho - {formataPreco(price)}
                  </Link>
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

export default CardPerfil
