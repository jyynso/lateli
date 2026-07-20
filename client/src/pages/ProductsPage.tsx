import Artwork from '../components/Artwork';
import SidebarFilter from '../components/SidebarFilteridk';
import SidebarCart from '../components/SidebarFilter';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        
        if(!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong uwu");
      } finally {
        setLoading(false);
      }
    }

    getProducts();

  }, []);

  const handleAddToCart = () => {
    
  };

  const { user } = useAuth();
  console.log(user);

  return (
    <div className='p-7 pt-15'>
      <SidebarFilter  />
      <SidebarCart />
      <div className='p-7 bg-(--bg-light) min-h-screen overflow-auto no-scrollbar'>
        <h1 className='font-bold text-4xl text-center mt-5'>Artworks</h1>
        <div className='mt-10 mx-auto flex flex-row flex-wrap justify-center gap-6 w-5xl'>
          {loading && <p className='text-center mt-10'>loading... uwu</p>}
          {error && <p className='text-center mt-10'>{error}</p>}
          {!loading && !error && (
            products.map((product: any) => (
              <Artwork 
                image={product.image}
                name={product.name}
                artist={product.artist}
                description={product.desc}
                medium={product.medium}
                price={product.price}
                onAddToCart={() => handleAddToCart}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;