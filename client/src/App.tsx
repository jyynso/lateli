import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage.tsx'
import { AuthProvider } from './context/AuthContext.tsx';
import UploadArtwork from './pages/UploadArtworkPage.tsx'

  function App() {

    return (
			<AuthProvider>
				<div className='flex flex-col text-(--text-black) font-archivo min-h-screen overflow-auto no-scrollbar'>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/products' element={<ProductsPage />} />
							<Route path='/upload' element={<UploadArtwork />}/>
						</Routes>
					</BrowserRouter>
				</div>
			</AuthProvider>
    );
  }

export default App;
