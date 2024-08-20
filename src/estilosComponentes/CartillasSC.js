import styled from 'styled-components'


export const ContenedorCartillas = styled.div`
    margin: 0rem auto;
    margin-right: 10rem;
    max-width: 80%;
    display: flex;
    justify-content: space-evenly;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 1rem;
 
`;

export const Cartilla = styled.div` 
    box-sizing: border-box;
    width: 100%;
    height: 20rem;
    margin: 0;
    background: rgb(205,109,95);
    background: linear-gradient(300deg, rgba(205,109,95,0.3981967787114846) 5%, rgba(96,81,81,0.4990371148459384) 71%);
    border-radius: 5px;
    overflow-y: scroll;
    overflow-x: clip;s
`;

export const CartillasTiulos = styled.h2`
color: #a72410;
font-size: 2rem;

`
