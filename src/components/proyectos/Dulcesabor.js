import React from 'react'
import { ContentComponent, TituloProyecto, ContenedorImagenes, ImagenesProyectos, AnclaGithub } from '../../SC/ProyectoSC'

const image =  'https://placehold.co/600x400'


const Dulcesabor = () => {
  return (
    <ContentComponent>
    <TituloProyecto>Pasteleria Dulcesabor</TituloProyecto>
      <ContenedorImagenes>
          <ImagenesProyectos src={image} alt='1'/>
          <ImagenesProyectos src={image} alt='2'/>
          <ImagenesProyectos src={image} alt='3'/>
      </ContenedorImagenes>
      <div>
          <p>Descripcion</p>
          <p>Esta es un proyecto de una e-comerce donde cree sliders, sidebar, colges, carruserl de destacador, creacion de usuarioentre otros para el front usando react,styled-components,hooks,manejo de estado y peticiones con redux
            y para el backend utilice tecnologias como node.js, express y para la base de datos mysql con gestor y crecion con mysql workbench
          </p>
          <AnclaGithub href='https://github.com/jbelen20/ds_remasterizacion'>link del proyecto en github</AnclaGithub>
      </div>
  </ContentComponent>
  )
}

export default Dulcesabor
