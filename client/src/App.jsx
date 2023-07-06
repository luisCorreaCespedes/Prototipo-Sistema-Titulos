import './App.css';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Upload from './pages/subirDocumento';
import Config from './pages/configuracion';
import NotFound from './pages/404';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdmin from "./components/ProtectedAdmin";
import { DocsProvider } from './context/DocsContext';

function App() {
  return (
    <AuthProvider>
        <DocsProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/inicio' element={<Home />} />
						<Route path='*' element={<NotFound />} />
						<Route element={<ProtectedAdmin />}>
							<Route path='/configuracion' element={<Config />} />
							<Route path='/subirdocumento' element={<Upload />} />
							<Route path='/actualizar/:id' element={<Upload />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</DocsProvider>
    </AuthProvider>
  );
}

export default App;
