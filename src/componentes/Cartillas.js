import React from 'react'
import {ContenedorCartillas, Cartilla, CartillasTiulos} from '../estilosComponentes/CartillasSC'

export default function Cartillas() {
  return (
    <ContenedorCartillas>
      <Cartilla>
        <CartillasTiulos>Sobre mi</CartillasTiulos>
        <p>Hola, mi nombre es Judith Carreño, vivo en Santiago de Chile, soy desarrolladora de software y artista amateur en mis tiempos libres, me considero creativa, me guta leer y aprender el porque de las cosas.  
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </Cartilla>
      <Cartilla>
        <CartillasTiulos>Formacion</CartillasTiulos>
        <p>Autodidacta</p>
        <p>comence de manera autodiddacta con cursos de udemy, youtub, lecturas y demas, metodos de aprendizaje que sigo ejerciendo</p>
        <p>4geecks Academy</p>
        <p>desarrolllo fullstack con javaScript en el Frontend y Python en el backen, aunque para la actualidad ya los manejo Full.Stack</p>
      </Cartilla>
      <Cartilla>
        <CartillasTiulos>Experiencia</CartillasTiulos>
        <p>desarrollo de software para servicios del area forestal, maderero y agropecuario de concepcion, el empleo consistia en ejecutarr herramientas que facilitaban los ingresos y salidas de productos a las empresas</p>
        <p></p>
      </Cartilla>
      <Cartilla>
        <CartillasTiulos>Skills</CartillasTiulos>
        <div>
            <p>Skills Programacionales</p>
            <p>Front-End: Html, Css, JavaScript, React, StyledComponents, ChartJs, Bootstrap, redux, Flux y Tkinter con Python. Backend: Python, Flask, Django, Jwt, Sql(Postgresql, Mysql y otros), Node, Express. Otros: Windows, Linux, Heroku, Aws, Docker, Scrum, Swagger Photoshop, Illustrator, Figma, Ingles medio, VirtualBox.</p>
        </div>
        <div>
            <p>Soft Skills</p>
            <p>Desarrollo en equipo, diciplina, proyeccion, creativivdad</p>
        </div>
        <div>
            <p>Otras habilidades</p>
            <p>idioma</p>
            <p>ingles medio</p>
        </div>
      </Cartilla>
    </ContenedorCartillas>
  )
}
