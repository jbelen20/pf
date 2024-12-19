import styled from "styled-components";

export const ContentComponent = styled.div`
    width: 70%;
    border: 1px solid #aaabb0;
    margin: 0 auto;
    margin-top: 6rem;
    padding: 2rem;
    overflow: hidden;
`

export const TituloProyecto = styled.p`
    padding: 0.5rem;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
`

export const ContenedorImagenes =  styled.div`
    display:flex;
    justify-content: space-between;
`

export const ImagenesProyectos =  styled.img`
    width: 300px;
    height: 25vh;
    object-fit:cover;
`
export const AnclaGithub = styled.a`
    color: green;
    text-decoration: none;
`