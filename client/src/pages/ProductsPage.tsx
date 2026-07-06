import Artwork from '../components/Artwork';
import SidebarFilter from '../components/SidebarFilter';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();

      setProducts(data);
    }

    getProducts();
  }, []);

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
        {products.map((product: any) => (
          <Artwork 
            image={product.image}
            name={product.name}
            artist={product.artist}
            description={product.desc}
            medium={product.medium}
            price={product.price}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default ProductsPage;