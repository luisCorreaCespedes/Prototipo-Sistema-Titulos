import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';

function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='inicio' element={<Home />} />
      </Routes>
    
    </div>
  );
}

export default App;
