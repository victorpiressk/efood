import { Food } from '../../pages/Home'
import { ContainerBanner } from './styles'

type Props = {
  food: Food
}
const Banner = ({ food }: Props) => (
  <ContainerBanner style={{ backgroundImage: `url(${food.capa})` }}>
    <div className="container">
      <span>{food.tipo}</span>
      <h3>{food.titulo}</h3>
    </div>
  </ContainerBanner>
)

export default Banner
