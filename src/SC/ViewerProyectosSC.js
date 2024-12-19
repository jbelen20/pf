import styled from "styled-components";


export const TitleViewer = styled.h2`
    margin-left:5rem;
    padding: 3rem;
    font-size: 2rem;
    font-weight: lighter;
` 

export const ContentLiner = styled.div`
    border: 1px solid #aaabb0;
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 3px;
`

export const ContentProject = styled.div` 
    display: flex;
    justify-content: space-between;
`

export const ButtonGoToProject =  styled.button`
    background: #84ad70 ;
    border: none;
    border-radius: 5px;
    padding: 0 4rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    height: 2.5rem;
    margin-top: 5px;
    &:hover{
    background: #4aaf1a;
    cursor: pointer;
    }
`