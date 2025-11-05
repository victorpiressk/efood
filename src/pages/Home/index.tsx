import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantsList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) return <Loader />

  return (
    <>
      <Header variant="home" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
