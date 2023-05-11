import './App.css';
import './Styles/Global.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import Estadisticas from './Pages/Estadisticas';
import Gestion from './Pages/Gestion';

function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='inicio' element={<Home />} />
        <Route path='estadisticas' element={<Estadisticas />} />
        <Route path='gestion' element={<Gestion />} />
      </Routes>
    
    </div>
  );
}

export default App;
