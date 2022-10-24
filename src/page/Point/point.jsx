import { Fragment, useState } from 'react'
import { Container } from './style'
import BoxButton from '../../components/BoxButton'
import { isMobile } from 'react-device-detect'
import Square from '../../components/Square'

const Point = () => {
  const [team, setTeam] = useState({play1: 0, play2:0})

  const newGame = () => {
    setTeam({play1: 0, play2:0})
  }
  const controller = (params = '', play) => {
    if (params === '+'){
      setTeam({...team, [play] : team[play] + 1})
    } else {
      if(team[play] !== 0){
        setTeam({...team, [play] : team[play] - 1})
      }
    }
    
  }

  return (
    <Fragment>
      <Container isMobile={isMobile}>
        <Square left play='play1' controller={controller} count={team.play1} />
        <Square right play='play2' controller={controller} count={team.play2} />
        <BoxButton top={1} left={0} handleClick={newGame}> Novo Jogo </BoxButton>
      </Container>

    </Fragment>
  )
}

export default Point