import React from 'react'
import { ContentComponent, TituloProyecto, ContenedorImagenes, ImagenesProyectos, AnclaGithub } from '../../SC/ProyectoSC'
import calc1 from '../../imageN/calculadora1.png'
import calc2 from '../../imageN/calculadora2.png'
import calc3 from '../../imageN/calculadora3.png'


// const image =  'https://placehold.co/200x200'

const Calculadora = () => {
  return (
    <ContentComponent>
      <TituloProyecto>Calculadora</TituloProyecto>
        <ContenedorImagenes>
            <ImagenesProyectos src={calc1} alt='1'/>
            <ImagenesProyectos src={calc2} alt='2'/>
            <ImagenesProyectos src={calc3} alt='3'/>
        </ContenedorImagenes>
        <div>
            <p>Descripcion</p>
            <p>Esta es una calculadora hecha a parir de la libreria react de javaScript con css, tine las funcionalidades de dumar, restar, multiplicar, dividir, borrar y restaurar el estado</p>
            <AnclaGithub href='https://github.com/conpantuflas/calculadora_1'>link del proyecto en github</AnclaGithub>
        </div>
    </ContentComponent>
  )
}

export default Calculadora
