import ArtworkCard from '../components/Artwork';
import Filter from '../components/Filter';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface ArtworkData {
  imageUrl: string;
  name: string;
  artist: string;
  description: string;
  medium: string;
  price: number;
  user: string;
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

  const { user } = useAuth();
  console.log(user);

  return (
    <div className='mb-20'>
      <div className='p-7 bg-white '>
        <h1 className='font-bold text-4xl text-center'>Artworks</h1>
        {/* <Filter className='lg:ml-34' /> */}
        <div className='mt-26 mx-auto flex flex-row flex-wrap justify-center gap-6 w-full lg:w-5xl'>
          {loading && <p className='text-center mt-10'>loading... uwu</p>}
          {error && <p className='text-center mt-10'>{error}</p>}
          {!loading && !error && (
            artworks.map((artwork: any) => (
              <ArtworkCard key={artwork.id}
                image={artwork.imageUrl}
                name={artwork.name}
                description={artwork.description}
                medium={artwork.medium}
                artist={artwork.artist}
                price={artwork.price}
                user={artwork.user.name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;