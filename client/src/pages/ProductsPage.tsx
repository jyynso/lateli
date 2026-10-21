import ArtworkCard from '../components/Artwork';
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
    fetch('http://localhost:8000/api/artworks', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
				console.log(data);
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
    <div className="mb-20">
      <div className="bg-white px-4 py-8 sm:px-7">
        <h1 className="fade-in text-center text-3xl font-bold sm:text-4xl">Artworks</h1>
        <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),16rem))] justify-center gap-6 sm:mt-20 stagger-fade-in">
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