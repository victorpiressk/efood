import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Profile = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) return <Loader />

  return (
    <>
      <Header variant="profile" />
      <Banner restaurant={restaurant} />
      <ProductList products={restaurant.cardapio} />
    </>
  )
}

export default Profile
