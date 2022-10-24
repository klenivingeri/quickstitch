import { useState } from 'react'
import { Typography, Container } from './style'
import { isMobile } from 'react-device-detect'
import BoxButton from '../BoxButton'
const Square = ({ left, right, play, controller, count }) => {
  const [color, setColor] = useState('transparent')
  const handleClick = (params) => {
    controller(params, play)
    if (params === '+') {
      setColor('green')
    } else {
      setColor('red')
    }
    setTimeout(() => {setColor('transparent')}, 100)
  }
  
  return (
    <Container>
        <Typography color={color} isMobile={isMobile} onClick={() => handleClick('+')}>
            <span>{("00" + count).slice(-2)}</span>
        </Typography >
      
      <BoxButton bottom={1} right={right} left={left} handleClick={handleClick} play={play} > -1 </BoxButton>
    </Container>)
}

export default Square