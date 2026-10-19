import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation.tsx'
import HomePage from './pages/HomePage.tsx'
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import Cart from './pages/Cart.tsx';
import UploadArtwork from './pages/UploadArtworkPage.tsx'

  function App() {

    return (
			<AuthProvider>
				<div className='flex flex-col text-(--text-black) font-archivo min-h-screen overflow-auto no-scrollbar'>
					<BrowserRouter>
						<Navigation />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/products' element={<ProductsPage />} />
							<Route path='/register' element={<Register />}/>
							<Route path='/login' element={<Login />}/>
							<Route path='/cart' element={<Cart />}/>
							<Route path='/upload' element={<UploadArtwork />}/>
						</Routes>
					</BrowserRouter>
				</div>
			</AuthProvider>
    );
  }

export default App;
