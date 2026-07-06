import Artwork from '../components/Artwork';
import SidebarFilter from '../components/SidebarFilter';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';

function ProductsPage() {
  return (
    <div className=''>
      <SidebarFilter  />
      <div className='p-7 bg-(--bg-light) min-h-screen overflow-auto no-scrollbar'>
        <h1 className='font-bold text-4xl text-center mt-5'>Artworks</h1>
        <span className='flex flex-row justify-end gap-5 w-5xl mx-auto pr-15'>
					<MagnifyingGlassIcon size={25} />
					<p className='font-semibold'>search...</p>
				</span>
      <div className='mt-10 mx-auto flex flex-row flex-wrap justify-center gap-6 w-5xl'>
        <Artwork 
          image='./duck.png'
          name='duck'
          artist='Y'
          description='ducky' 
          medium='digital'
          price={1500}
        />
        <Artwork 
          image='./duck.png'
          name='duck'
          artist='Y'
          description='ducky' 
          medium='digital'
          price={1500}
        />
        <Artwork 
          image='./duck.png'
          name='duck'
          artist='Y'
          description='ducky' 
          medium='digital'
          price={1500}
        />
        <Artwork 
          image='./duck.png'
          name='duck'
          artist='Y'
          description='ducky' 
          medium='digital'
          price={1500}
        />
      </div>
    </div>
    </div>
  );
}

export default ProductsPage;