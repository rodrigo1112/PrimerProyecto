
import './App.css';
  import {Routes, Route} from 'react-router-dom'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navegacion from './components/Navegacion';
import CrearUsuarios from './components/CrearUsuarios';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<ListaUsuarios/>} />
          <Route path="/CrearUsuarios" element={<CrearUsuarios/>} />
          <Route path="/edit/:id" element={<CrearUsuarios/>} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
