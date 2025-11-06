import Tag from '../Tag'
import Button from '../Button'
import { truncateText } from '../../utils'
import iconStar from '../../assets/images/icone-estrela.png'
import * as S from './styles'

const RestaurantCard = ({
  image,
  infos,
  title,
  score,
  description,
  id
}: RestaurantCardProps) => {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.ContentContainer>
        <S.Title>
          <h3>{title}</h3>
          <div>
            <span>{score}</span>
            <img src={iconStar} alt="Icone de estrela" />
          </div>
        </S.Title>
        <p>{truncateText(description)}</p>
        <Button
          to={`/perfil/${id}`}
          type="link"
          title="Saiba mais"
          variant="home"
        >
          Saiba mais
        </Button>
      </S.ContentContainer>
    </S.CardContainer>
  )
}

export default RestaurantCard
