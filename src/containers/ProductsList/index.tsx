import Food from '../../models/Food'
import CardPerfil from '../../components/CardPerfil'
import { List } from './styles'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <div>
    <div className="container">
      <List>
        {foods.map((food) => (
          <li key={food.id}>
            <CardPerfil
              image={food.image}
              title={food.title}
              score={food.score}
              description={food.description}
            />
          </li>
        ))}
      </List>
    </div>
  </div>
)

export default ProductsList
