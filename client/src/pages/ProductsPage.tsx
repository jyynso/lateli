import '../index.css'
import Artwork from '../components/Artwork';

function ProductsPage() {
  return (
    <div className='p-7 bg-(--bg-light) min-h-screen overflow-auto no-scrollbar'>
      <h1 className='font-bold text-4xl text-center'>Artworks</h1>
      <div className='flex flex-row flex-wrap justify-center gap-6 mt-10'>
        <Artwork 
          image='./duck.png'
          name='duck'
          artist='Y'
          description='ducky' 
          medium='digital'
          price={1500}
        />
        <Artwork 
          image='./cafe.png'
          name='You at the cafe'
          artist='Y'
          description='cafeine' 
          medium='digital'
          price={1500}
        />
      </div>
    </div>
  );
}

export default ProductsPage;