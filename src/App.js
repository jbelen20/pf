import Panel from './components/Panel'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import OtherView from './components/ViewerProyectos';
import RickAndMorty from './components/proyectos/RickAndMorty';
import Dulcesabor from './components/proyectos/Dulcesabor';
import Calculadora from './components/proyectos/Calculadora';


function App() {
  return (
    // <>
    // <Panel/>
    // {/* <OtherView/> */}
    // </>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Panel/>} /> 
      <Route path='/proyectos' element={<OtherView/>} /> 
      <Route path='/rickandmorty' element={<RickAndMorty/>} /> 
      <Route path='/dulcesabor' element={<Dulcesabor/>} />
      <Route path='/calculadora' element={<Calculadora/>} />  
    </Routes>
   </BrowserRouter>
  );
}

export default App;
