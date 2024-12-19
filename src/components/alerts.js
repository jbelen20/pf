import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


const MySwal = withReactContent(Swal);

const data = {
  text : "Hola, mi nombre es Judith Carreño, vivo en santiago de chile,  Desarrollo software ya de hace un tirmpo, comence por diversion en el año 2021 y luego me especialice 4GeeksAcademy en desarrollo web FullStack, a parte de desarrollar software disfruto de actividades como el deporte, la lectura, pasar tiempo con amistades ,arte y computadores, Me considero una persona optimista, alegre y convencida de que siempre todo es posible."
}

export const showSwalSombreMi = () => {
  MySwal.fire({
      title: <p>Sobre Mi</p>,
      text: data.text
  });
};

export const showSwalContact = () => {
    MySwal.fire({
        title: <p>Contacto</p>,
        html: <div>
                <p>celular: +569 22138662</p>,
                <p>correo: 3280kg@gmail.com</p>,
                <p>github: jbelen20</p>,
                <p>linkedin: judith carreño</p>,
              </div> 
    });
  };
  
  
 export const showSwalEducacion = () => {
    MySwal.fire({
        title: <p>Educacion</p>,
        html: <div>
                <p>Comencé aprendiendo a modo de diversion y de manera autodidacta, para esto me he apoyado de cursos, libros, blogs y youTube gracias a YouTube</p>,
                <p>Luego comence en 4Geeks Academy que es un bootcamp donde aprendi mucho sobre todo al manejo de backend con python, consumo de api, fontend con react, trabajo en equipo, ahi cree mis primeras plataformas congruentes</p>,
              </div> 
    });
  };
  
 export const showSwalExperiencia = () => {
    MySwal.fire({
        title: <p>Educacion</p>,
        html: <div>
                <p>he desarrollado diferentes tipos de plataformas, tanto locales, como versiones wep de landingPage, e-comerce, templates de consumo de apis, calculadoras y mas, se tambien react native por parte del desarrollo movil</p>
                <h1>Ecofor, Soluciones Tecnologicas</h1>
                <p>En este empleo tuve la oportunidad de integrarme en proyectos tanto de front-end como de back-end que incluían tecnologías como Python con Django y JavaScript con React. participe de proyectos diferentes implementandole componentes a las plataformas dependiendo de la nececidades</p>,
                <h1>Otras Experincias</h1>
                <p>Tambien he desarrollado proyectos para terceros como un landigPage de estetica y un landing para sic seguridad</p>,
              </div> 
    });
  };
  
  
 export const showSwalSoftSkills = () => {
    MySwal.fire({
      title: <p>Soft Skills</p>,
      html: <div>
          <p>soy una persona obstinada cuando quiero conseguir algo, el deporte me ha enseñado de diciplina, soy bastante alegre, me gusta bromear y formar gratos hambinetes,para mejorar la buena Comunicacion, pero tambien se entender el peso de las situaciones cuando requieren myor control.</p>
        </div>
    });
  };
  
 export const showSwalSkills = () => {
    MySwal.fire({
        title: <p>Skills</p>,
        html: <div>
                <h1>Front-End</h1>
                <p>Html, Css, JavaScript, React, StyledComponents, ChartJs, Bootstrap, Redux, Flux y Tkinter con Python</p>
                <h1>Back-End</h1>
                <p>Python, Flask, Django, Jwt, Sql(Postgresql, Mysql y otros), Node, Express, aws, heroku</p>
                <h1>Y mas como ...</h1>
                <p>Otros: Windows, Linux, Heroku, Docker, Scrum, Swagger, Photoshop, Illustrator, Figma, Ingles medio, VirtualBox, Vpn's  etc.</p>
              </div> 
    });
  };