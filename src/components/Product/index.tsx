import { Card, Infos, Title } from './styles'
import iconStar from '../../assets/images/icone-estrela.png'
import Tag from '../Tag'
import Button from '../Button'

export type Props = {
  image: string
  infos: string[]
  title: string
  score: string
  description: string
  variant: 'home' | 'perfil'
}

const Product = ({
  image,
  infos,
  title,
  score,
  description,
  variant
}: Props) => (
  <Card variant={variant}>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container">
      <Title>
        <h3>{title}</h3>
        {variant === 'home' && (
          <div>
            <span>{score}</span>
            <img src={iconStar} alt="Icone de estrela" />
          </div>
        )}
      </Title>
      <p>{description}</p>
      {variant === 'home' ? (
        <Button to="/perfil" type="link" title="Saiba mais" variant="home">
          Saiba mais
        </Button>
      ) : (
        <Button type="button" title="Adicionar ao carrinho" variant="perfil">
          Adicionar ao carrinho
        </Button>
      )}
    </div>
  </Card>
)

export default Product
