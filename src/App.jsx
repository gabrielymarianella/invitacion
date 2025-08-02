import './App.css';
import Confirmacion from './components/confirmacion/confirmacion';
import Conteo from './components/conteo/conteo';
import Galeria from './components/galeria/galeria';
import Info from './components/info/info';
import Minuto from './components/minuto/minuto';
import Musica from './components/musica/musica';
import Portada from './components/portada/portada';
import Regalos from './components/regalos/regalos'

function App() {

  return (
    <>
      <div className="bodyy">
        <Portada />
        <Musica />
        <Info />
        <Minuto />
        <Regalos />
        <Galeria /> 
        <Confirmacion />
        <Conteo />
      </div>
    </>
  )
}

export default App
