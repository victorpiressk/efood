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
            <CardPerfil
              id={food.id}
              image={food.foto}
              title={food.nome}
              description={food.descricao}
              price={food.preco}
              portion={food.porcao}
            />
          </li>
        ))}
      </List>
    </div>
  </div>
)

export default ProductsList
