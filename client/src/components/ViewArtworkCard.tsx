import { useState, useEffect } from "react";
import ZoomImage from '../components/ZoomImage';

type ViewArtworkCardProps = {
  isOpen: boolean;
  onClose: () => void;
  artwork: ArtworkData;
};

interface ArtworkData {
  imageUrl: string;
  name: string;
  artist: string;
  description?: string;
  medium?: string;
  price: number;
  user: string;
}

export default function ViewArtworkCard({ isOpen, onClose, artwork }: ViewArtworkCardProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState<ArtworkData[]>([]);
  const [show, setShow] = useState(isOpen);

  const handleCheckout = () => {

  };

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-200 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && !isOpen) setShow(false);
      }}
    >
      <div
        className={`flex flex-col lg:flex-row w-full h-150 lg:w-4xl lg:h-120 relative transition-all duration-200 ease-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
          <ZoomImage src={artwork.imageUrl} alt={artwork.name} />
          <div className="flex flex-col gap-1 rounded-r-md p-8 w-xs lg:w-sm bg-(--bg-card)">
            <h1 className='text-3xl font-semibold pb-2'>{artwork.name}</h1>
            <p><span className="font-semibold">Artist:</span> {artwork.artist}</p>
            {artwork.description && <p><span className="font-semibold">Description:</span> {artwork.description}</p>}
            {artwork.medium && <p><span className="font-semibold">Medium:</span> {artwork.medium}</p>}
            <p><span className="font-semibold">Sold by:</span> {artwork.user}</p>
            <p className="text-2xl font-semibold py-2">₱{artwork.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); handleCheckout}}
                className='m-3 mt-auto rounded-md cursor-pointer p-3 shadow-md transition-all duration-50  bg-(--accent-charcoalBlue) text-white'>
                Checkout
            </button>
          </div>
        </div>
    </div>
  );
}