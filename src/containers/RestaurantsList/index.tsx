import Food from '../../models/Food'
import CardHome from '../../components/CardHome'
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
            <CardHome
              image={food.image}
              infos={food.infos}
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
