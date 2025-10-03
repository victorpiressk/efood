import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../containers/ProductsList'
import { useGetFoodQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: food } = useGetFoodQuery(id!)

  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header variant="perfil" />
      <Banner food={food} />
      <ProductsList foods={food.cardapio} />
    </>
  )
}

export default Perfil
