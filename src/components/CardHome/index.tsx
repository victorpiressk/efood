import { CardContainer, Infos, Title } from './styles'
import iconStar from '../../assets/images/icone-estrela.png'
import Tag from '../../containers/Tag'
import Button from '../Button'

export type Props = {
  image: string
  infos: string[]
  title: string
  score: string
  description: string
}

const CardHome = ({ image, infos, title, score, description }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container">
      <Title>
        <h3>{title}</h3>
        <div>
          <span>{score}</span>
          <img src={iconStar} alt="Icone de estrela" />
        </div>
      </Title>
      <p>{description}</p>
      <Button to="/perfil" type="link" title="Saiba mais" variant="home">
        Saiba mais
      </Button>
    </div>
  </CardContainer>
)

export default CardHome
