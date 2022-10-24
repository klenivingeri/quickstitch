import styled from 'styled-components'

export const Container = styled.div`
position: relative;
height: 100%;
width: 100%;
`

export const Typography = styled.button`
font-family: 'Teko', sans-serif;
background-color: ${({color}) => color} ;
height: 100%;
width: 100%;
color: white;
border: 0px;
padding-top: ${({isMobile}) => isMobile ? 65 : 90 }px;
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
`

