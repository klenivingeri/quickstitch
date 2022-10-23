import styled from 'styled-components'

export const Container = styled.div`
position: relative;
height: 100%;
width: 100%;
`

export const Typography = styled.div`
font-family: 'Teko', sans-serif;
height: 100%;
width: 100%;
padding-top: ${({isMobile}) => isMobile ? 30 : 55 }px;
font-size: ${({isMobile}) => isMobile ? 25 : 45 }rem;
display: flex;
font-weight: 500;
line-height: 0px;
justify-content: center;
align-items: center;
overflow: hidden;
-webkit-touch-callout: none;  /* iPhone OS, Safari */
-webkit-user-select: none;    /* Chrome, Safari 3 */
-khtml-user-select: none;     /* Safari 2 */
-moz-user-select: none;       /* Firefox */
-ms-user-select: none;        /* IE10+ */
user-select: none;            /* Possível implementação no futuro */
&:first-of-type {
  border-right: ${({isMobile}) => isMobile ? 1 : 4 }px solid white;
}
@media (max-width: 768px) {
  &:first-of-type {
    border-bottom: 1px solid white;
  }
}
`

