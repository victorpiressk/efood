import { Food } from '../../pages/Home'
import CardHome from '../../components/CardHome'
import { List } from './styles'

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = []

    if (food.destacado === true) {
      tags.push('Destaque da semana')
    }

    if (food.tipo) {
      tags.push(food.tipo)
    }

    return tags
  }

  return (
    <div>
      <div className="container">
        <List>
          {foods.map((food) => (
            <li key={food.id}>
              <CardHome
                id={food.id}
                image={food.capa}
                infos={getFoodTags(food)}
                title={food.titulo}
                score={food.avaliacao}
                description={food.descricao}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  )
}
export default ProductsList
