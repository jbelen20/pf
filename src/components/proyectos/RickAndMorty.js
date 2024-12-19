import React from 'react'
import { ContentComponent, TituloProyecto, ContenedorImagenes, ImagenesProyectos, AnclaGithub } from '../../SC/ProyectoSC'

const image =  'https://placehold.co/600x400'


const RickAndMorty = () => {
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
          <p>Esta es una calculadora hecha a parir de la libreria react de javaScript con css, tine las funcionalidades de dumar, restar, multiplicar, dividir, borrar y restaurar el estado</p>
          <AnclaGithub href='https://github.com/conpantuflas/calculadora_1'>link del proyecto en github</AnclaGithub>
      </div>
  </ContentComponent>
  )
}

export default RickAndMorty
