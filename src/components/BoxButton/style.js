import styled from 'styled-components'

export const Border = styled.div`
border: 1px solid white;
padding: 10px ${({bottom}) => bottom ? 30 : 20 }px;
`

export const Container = styled.div`
  padding: 5px 10px;
  position: absolute;
  border-radius: 3px;
  ${({top}) => top ? 'top: 0px;' : '' }
  ${({left}) => left ? 'left: 0px;' : '' }
  ${({right}) => right ? 'right: 0px;' : '' }
  ${({bottom}) => bottom ? 'bottom: 0px;' : '' }
  -webkit-touch-callout: none;  /* iPhone OS, Safari */
  -webkit-user-select: none;    /* Chrome, Safari 3 */
  -khtml-user-select: none;     /* Safari 2 */
  -moz-user-select: none;       /* Firefox */
  -ms-user-select: none;        /* IE10+ */
  user-select: none;   
`