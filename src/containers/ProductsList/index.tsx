import { Cardapio } from '../../pages/Home'
import CardPerfil from '../../components/CardPerfil'
import { List } from './styles'

type Props = {
  foods: Cardapio[]
}

const ProductsList = ({ foods }: Props) => (
  <div>
    <div className="container">
      <List>
        {foods.map((food) => (
          <li key={food.id}>
            <CardPerfil food={food} />
          </li>
        ))}
      </List>
    </div>
  </div>
)

export default ProductsList
