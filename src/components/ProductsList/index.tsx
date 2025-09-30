import Food from '../../models/Food'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  variant: 'home' | 'perfil'
  foods: Food[]
}

const ProductsList = ({ variant, foods }: Props) => (
  <div>
    <div className="container">
      <List variant={variant}>
        {foods.map((food) => (
          <>
            <Product
              key={food.id}
              image={food.image}
              infos={food.infos}
              title={food.title}
              score={food.score}
              description={food.description}
              variant={variant}
            />
          </>
        ))}
      </List>
    </div>
  </div>
)

export default ProductsList
