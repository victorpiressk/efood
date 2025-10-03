import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) return <h4>Carregando...</h4>

  return (
    <>
      <Header variant="home" />
      <RestaurantsList foods={restaurants} />
    </>
  )
}

export default Home
