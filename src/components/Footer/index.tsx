import logo from '../../assets/images/logo-efood.png'
import instagram from '../../assets/images/icone-insta.png'
import facebook from '../../assets/images/icone-fb.png'
import twitter from '../../assets/images/icone-tw.png'
import { ContainerFooter, SocialMedia } from './styles'

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <img src={logo} alt="efood" />
      <SocialMedia>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </ContainerFooter>
)

export default Footer
