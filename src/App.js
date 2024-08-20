import Cartillas from './componentes/Cartillas';
import SlideSkills from './componentes/SlideSkills';
import { Fondo, Subtitulo, Nombre, Info } from './estilosComponentes/AppSC';

function App() {
  return (
    <Fondo > 
      <Info>
        <Nombre>Judith Carreño Vega</Nombre>
        <Subtitulo>Desarrolladora FullStack</Subtitulo>
      </Info>
      <Cartillas />
      <SlideSkills />
    </Fondo>
  );
}

export default App;
