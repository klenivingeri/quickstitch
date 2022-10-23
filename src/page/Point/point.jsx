import { Fragment } from 'react'
import { Container } from './style'
import BoxButton from '../../components/BoxButton'

import Square from '../../components/Square'

const Point = () => {

  return (
    <Fragment>
      <Container>
        <Square left />
        <Square right />
        <BoxButton top={1} left={0} > Novo Jogo </BoxButton>
      </Container>

    </Fragment>
  )
}

export default Point