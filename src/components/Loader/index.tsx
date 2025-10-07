import { ClockLoader } from 'react-spinners'
import { cores } from '../../globalStyles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={cores.salmao} />
  </Container>
)

export default Loader
