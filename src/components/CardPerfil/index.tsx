import { CardContainer } from './styles'
import Button from '../Button'

export type Props = {
  image: string
  title: string
  score: string
  description: string
}

const CardPerfil = ({ image, title, description }: Props) => (
  <CardContainer>
    <div className="container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button type="button" title="Saiba mais" variant="perfil">
        Adicionar ao carrinho
      </Button>
    </div>
  </CardContainer>
)

export default CardPerfil
