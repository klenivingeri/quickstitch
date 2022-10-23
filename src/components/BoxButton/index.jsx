import PropTypes from 'prop-types'
import { Container, Border } from './style'

const BoxButton = ({ top, left, right, bottom, children }) => {
  return (
      <Container top={top} left={left} right={right} bottom={bottom}>
        <Border>
          {children}
        </Border>
      </Container>
  )
}

BoxButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default BoxButton