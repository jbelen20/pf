import styled from 'styled-components'


export const ContenedorCartillas = styled.div`
    margin: 0rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

export const Cartilla = styled.div` 
    margin: 0;
    background: rgb(205,109,95);
    background: linear-gradient(300deg, rgba(205,109,95,0.3981967787114846) 5%, rgba(96,81,81,0.4990371148459384) 71%);
    border-radius: 5px;
`;

export const CartillasTiulos = styled.h2`
position:absolute;
top: 18rem;
color: #a72410;
transform: rotate(90deg);
font-size: 4rem;
margin: 0 -6rem;
`
