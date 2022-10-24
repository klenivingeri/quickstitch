import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
overflow: hidden; 
position: relative;
& > div:first-child {
  border-right: ${({isMobile}) => isMobile ? 1 : 4 }px solid white;
}
@media (max-width: 768px) {
  flex-direction: column;
  & > div:first-child {
    border-bottom: 1px solid white;
  }
}
`