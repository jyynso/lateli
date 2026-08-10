import '/src/index.css'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='flex flex-row justify-between p-20 h-screen'>
      <div className='flex flex-col p-5 mt-10'>
        <h1 className='font-bold text-5xl'>discover</h1>
        <h1 className='font-bold text-5xl'>arts</h1>
        <h1 className='font-bold text-[9rem]'>lateli</h1>
        <Link to={"/products"} className='bg-(--accent-charcoalBlue) w-20 ml-auto text-center rounded-md text-white p-2'>shop</Link>
      </div>
      <div className='flex flex-row gap-8 p-5'>
        <img className='h-70 mt-auto' src='../public/cafe.png' />
        <img className='h-70' src='../public/duck.png' />
      </div>
    </div>
  );
}

export default HomePage;
