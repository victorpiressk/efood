import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../containers/ProductsList'
import { Food } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Food>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

  if (!perfil) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header variant="perfil" />
      <Banner food={perfil} />
      <ProductsList foods={perfil.cardapio} />
    </>
  )
}

export default Perfil
