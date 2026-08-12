import '/src/index.css'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='flex flex-col lg:flex-row justify-none lg:justify-between p-6 lg:px-20 h-screen'>
      <div className='flex flex-col mt-2 lg:mt-6'>
        <h1 className='font-bold text-5xl'>discover</h1>
        <h1 className='font-bold text-5xl'>arts</h1>
        <h1 className='font-bold text-[9rem]'>lateli</h1>
        <Link to={"/products"} className='bg-(--accent-charcoalBlue) w-20 ml-auto text-center rounded-sm text-white p-1.5'>browse</Link>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 p-5'>
        <img className='w-54 lg:h-70 lg:w-auto mt-1 mb-1 lg:mt-auto lg:mb-10' src='../public/cafe.png' />
        <img className='w-48 lg:h-70 lg:w-auto ml-auto lg:ml-none' src='../public/duck.png' />
      </div>
    </div>
  );
}

export default HomePage;
