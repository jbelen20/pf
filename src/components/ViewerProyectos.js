import React from 'react'
import { TitleViewer, ContentLiner, ContentProject, ButtonGoToProject } from '../SC/ViewerProyectosSC'
import { Link } from 'react-router-dom'

export default function ViewerProyectos() {
  return (
    <div>
     <TitleViewer>Proyectos</TitleViewer> 
     <ContentLiner>
      <div>
        <p>Nombre</p>
        <hr/>
      </div>
      <ContentProject>
        <p>calculadora</p>
        <Link to={'/calculadora'}>
          <ButtonGoToProject>Go!</ButtonGoToProject>
        </Link>
      </ContentProject>
        <hr/>
      <ContentProject>
        <p>DulceSabor</p>
        <Link to={'/dulcesabor'}>
          <ButtonGoToProject>go!</ButtonGoToProject>
        </Link>
      </ContentProject>
        <hr/>
      <ContentProject>
      <p>Rick And Morty</p>
      <Link to={'/rickandmorty'}>
        <ButtonGoToProject>go!</ButtonGoToProject>
      </Link>
      </ContentProject>
        <hr/>
     </ContentLiner>
    </div>
  )
}
