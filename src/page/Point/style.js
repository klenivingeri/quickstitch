import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
overflow: hidden; 
@media (max-width: 768px) {
    flex-direction: column;
  }
`