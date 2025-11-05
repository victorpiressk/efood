import { ContainerBanner } from './styles'

const Banner = ({ food }: BannerProps) => {
  return (
    <ContainerBanner style={{ backgroundImage: `url(${food.capa})` }}>
      <div className="container">
        <span>{food.tipo}</span>
        <h3>{food.titulo}</h3>
      </div>
    </ContainerBanner>
  )
}

export default Banner
