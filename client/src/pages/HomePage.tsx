import '/src/index.css'
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className='p-6 lg:px-20 min-h-screen'>

      <section id='hero' className="relative h-full">
        <img className="absolute right-8 top-10 z-10 w-[48vw]" src="./pexels-orange.jpg" alt="" />

        <div className="relative z-20">
          <h1 className="text-[12vw] font-bold leading-none text-(--accent-charcoalBlue)">
            Art
          </h1>
          <h1 className="text-[12vw] font-bold leading-none text-(--accent-charcoalBlue)">
            Market<span className='text-transparent' style={{WebkitTextStroke: '2px black',}}>place</span>
          </h1>

          <div className='items-center justify-center mt-20'>
            <h2 className='text-[4vw] text-(--accent-charcoalBlue) font-semibold absolute top-110 left-110'>lateli</h2>
            <Link to={"/products"} className='absolute right-16 top-120 font-bold text-white'>
              browse
            </Link>
          </div>
        </div>
      </section>

      <section id='what-lateli' className='flex flex-row items-center justify-between mt-80 mx-30'>
        <h2 className='text-[2vw] font-semibold'>What is lateli?</h2>
        <span className='flex flex-col w-100'>
          <h3 className='font-semibold'>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit eleifend mauris, vel volutpat ligula mattis quis. Nulla non tincidunt orci, sed sodales risus. Phasellus at molestie lectus, faucibus eleifend sem. </p>
        </span>
      </section>

      <section id='why-lateli' className='flex flex-row items-center justify-between my-50 mx-30'>
        <h2 className='text-[2vw] font-semibold'>Why use lateli?</h2>
        <span className='flex flex-col w-100 '>
          <h3 className='font-semibold'>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit eleifend mauris, vel volutpat ligula mattis quis. Nulla non tincidunt orci, sed sodales risus. Phasellus at molestie lectus, faucibus eleifend sem. </p>
        </span>
      </section>
    </div>
  );
}

export default HomePage;