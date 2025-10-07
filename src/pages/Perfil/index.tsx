import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../containers/ProductsList'
import { useGetFoodQuery } from '../../services/api'
import Loader from '../../components/Loader'

type FoodParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as FoodParams
  const { data: food } = useGetFoodQuery(id)

  if (!food) return <Loader />

  return (
    <>
      <Header variant="perfil" />
      <Banner food={food} />
      <ProductsList foods={food.cardapio} />
    </>
  )
}

export default Perfil
