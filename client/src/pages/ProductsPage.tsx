import ArtworkCard from '../components/Artwork';
import SidebarCart from '../components/SidebarFilter';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface ArtworkData {
  imageUrl: string;
  name: string;
  artist: string;
  description: string;
  medium: string;
  price: number;
}

function ProductsPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState<ArtworkData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/artworks')
      .then(res => res.json())
      .then(data => {
        setArtworks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load artworks");
        setLoading(false);
      })
  }, []);

  const handleAddToCart = () => {
    
  };

  const { user } = useAuth();
  console.log(user);

  return (
    <div className='p-7 pt-15'>
      <SidebarCart />
      <div className='p-7 bg-(--bg-light) min-h-screen overflow-auto no-scrollbar'>
        <h1 className='font-bold text-4xl text-center mt-5'>Artworks</h1>
        <div className='mt-10 mx-auto flex flex-row flex-wrap justify-center gap-6 lg:w-4xl sm:w-lg'>
          {loading && <p className='text-center mt-10'>loading... uwu</p>}
          {error && <p className='text-center mt-10'>{error}</p>}
          {!loading && !error && (
            artworks.map((artwork: any) => (
              <ArtworkCard 
                image={artwork.imageUrl}
                name={artwork.name}
                artist={artwork.artist}
                description={artwork.desc}
                medium={artwork.medium}
                price={artwork.price}
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