import { BannerContainer } from './styles'

const Banner = ({ restaurant }: BannerProps) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <span>{restaurant.tipo}</span>
        <h3>{restaurant.titulo}</h3>
      </div>
    </BannerContainer>
  )
}

export default Banner
