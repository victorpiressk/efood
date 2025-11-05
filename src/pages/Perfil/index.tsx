import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { useGetFoodQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: food } = useGetFoodQuery(id)

  if (!food) return <Loader />

  return (
    <>
      <Header variant="perfil" />
      <Banner food={food} />
      <ProductsList products={food.cardapio} />
    </>
  )
}

export default Perfil
