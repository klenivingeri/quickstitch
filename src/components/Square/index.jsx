import { Container } from './style'
import { isMobile } from 'react-device-detect'

const Square = () => {
  return (
  <Container isMobile={isMobile}>
    <span>01</span>
  </Container>)
}

export default Square