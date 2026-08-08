import { useState, useEffect } from "react";

type ViewArtworkCardProps = {
  isOpen: boolean;
  onClose: () => void;
  artwork: ArtworkData;
};

interface ArtworkData {
  imageUrl: string;
  name: string;
  artist: string;
  description: string;
  medium: string;
  price: number;
  user: string;
}

export default function ViewArtworkCard({ isOpen, onClose, artwork }: ViewArtworkCardProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="flex flex-col lg:flex-row w-full h-150 lg:w-4xl lg:h-120 relative" onClick={(e) => e.stopPropagation()}>
          <div className="bg-(--bg-white) rounded-l-md w-xs h-xs lg:w-md lg:h-md">
            <img src={artwork.imageUrl} alt={artwork.name} className='w-full h-full object-scale-down'/>
          </div>
          <div className="flex flex-col rounded-r-md p-5 w-xs lg:w-sm bg-(--bg-card)">
            <h1 className='text-xl font-semibold'>{artwork.name}</h1>
            <p>Artist: {artwork.artist}</p>
            <p className="line-clamp-2">Description: {artwork.description}</p>
            <p>Medium: {artwork.medium}</p>
            <p>Sold by: {artwork.user}</p>
          </div>
        </div>
    </div>
  );
}

