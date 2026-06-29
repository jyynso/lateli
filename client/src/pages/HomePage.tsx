import '/src/index.css'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-10 gap-5'>
      <h1 className='text-8xl font-bold'>welcome to lateli</h1>
      <p>discover incredible artworks</p>
      <Link to={"/products"} className='bg-black text-white p-2 rounded-sm'>view artworks</Link>
    </div>
  );
}

export default HomePage;
