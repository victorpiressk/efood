import { CardContainer, Infos, Title } from './styles'
import iconStar from '../../assets/images/icone-estrela.png'
import Tag from '../Tag'
import Button from '../Button'

export type Props = {
  id: number
  image: string
  infos: string[]
  title: string
  score: number
  description: string
}

const CardHome = ({ image, infos, title, score, description, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }

    return descricao
  }

  return (
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
        <p>{getDescricao(description)}</p>
        <Button
          to={`/perfil/${id}`}
          type="link"
          title="Saiba mais"
          variant="home"
        >
          Saiba mais
        </Button>
      </div>
    </CardContainer>
  )
}

export default CardHome
