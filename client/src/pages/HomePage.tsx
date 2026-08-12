import '/src/index.css'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='relative flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 lg:px-20 h-screen overflow-hidden'>
      <div className='flex flex-col mt-4 lg:mt-10 z-10 relative'>
        <p className='uppercase tracking-[0.3em] text-xs mb-3 font-medium'> an art marketplace </p>
        <h1 className='text-5xl lg:text-6xl leading-[0.95]'> discover </h1>
        <h1 className='text-5xl lg:text-6xl leading-[0.95]'> original arts </h1>
        <h1 className='font-serif italic font-normal text-[6rem] lg:text-[9rem] leading-[0.85] py-2 -ml-1 text-(--accent-charcoalBlue) whitespace-nowrap'> lateli </h1>
        <Link 
          to={"/products"} 
          className='group inline-flex items-center gap-2 bg-[#1C1C1C] w-fit mt-6 text-white text-sm tracking-wide rounded-full px-6 py-3 transition-colors hover:bg-(--accent-charcoalBlue)'>
          browse
          <span className='transition-transform group-hover:translate-x-1'>→</span>
        </Link>
      </div>
      <div className='relative w-full lg:w-1/2 h-64 lg:h-full mt-10 lg:mt-0'>
        <img className='absolute top-[8%] left-[10%] lg:left-[15%] w-40 lg:w-56 -rotate-6 rounded-sm shadow-xl ring-8 ring-white'
          src='../public/cafe.png' />
        <img className='absolute bottom-[5%] right-[5%] lg:right-[10%] w-44 lg:w-64 rotate-[4deg] rounded-sm shadow-xl ring-8 ring-white z-10'
          src='../public/Collage.png' />
      </div>
    </div>
  );
}

export default HomePage;