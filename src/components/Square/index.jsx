
import { Typography, Container } from './style'
import { isMobile } from 'react-device-detect'
import BoxButton from '../BoxButton'

const Square = ({ left, right }) => {
  return (
    <Container>
      <Typography isMobile={isMobile}>
        <span>00</span>

      </Typography >
      <BoxButton bottom={1} right={right} left={left} > -1 </BoxButton>
    </Container>)
}

export default Square