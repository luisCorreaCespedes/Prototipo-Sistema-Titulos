import './App.css';
import { Route, Routes } from 'react-router-dom';
import InicioSesion from './Pages/InicioSesion';
import Principal from './Pages/Principal';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<InicioSesion />} />
        <Route path='principal' element={<Principal />} />
      </Routes>
    
    </div>
  );
}

export default App;
