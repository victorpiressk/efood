import CardHome from '../RestaurantCard'
import { List } from './styles'

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado === true) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  return (
    <div>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <CardHome
                id={restaurant.id}
                image={restaurant.capa}
                infos={getRestaurantTags(restaurant)}
                title={restaurant.titulo}
                score={restaurant.avaliacao}
                description={restaurant.descricao}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  )
}
export default RestaurantList
