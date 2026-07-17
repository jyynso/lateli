import './index.css'
import './pages/ProductsPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation.tsx'
import HomePage from './pages/HomePage.tsx'
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import ToggleTheme from './components/ToggleTheme';
import Cart from './pages/Cart.tsx';

  function App() {
    return (
			<AuthProvider>
				<div className='flex flex-col text-(--text-black) font-archivo bg-(--bg-light) min-h-screen overflow-auto no-scrollbar'>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/register' element={<Register />}/>
						<Route path='/login' element={<Login />}/>
						<Route path='/cart' element={<Cart />}/>
					</Routes>
				</BrowserRouter>
				<ToggleTheme />
				</div>
			</AuthProvider>
    );
  }

export default App;
