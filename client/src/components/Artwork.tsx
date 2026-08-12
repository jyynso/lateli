import { BasketIcon } from "@phosphor-icons/react/dist/ssr";
import ViewCard from "./ViewArtworkCard";
import { useState } from "react";

type ArtworkProps = {
    image: string;
    name: string;
    artist: string;
    description?: string;
    medium?: string;
    price: number;
    user: string; 
    showDetails?: boolean;
}

function Artwork({ image, name, artist, description, medium, price, user, showDetails }: ArtworkProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='flex flex-col group relative w-full lg:w-80'>
        <img src={image} alt={name} onClick={() => setIsModalOpen(true)} 
          className='h-74 object-cover cursor-pointer transition-transform duration-200 hover:scale-103 hover:shadow-lg'/>
        <div className='flex flex-1 flex-col gap-1 py-3 px-1'>
          {showDetails && description && <p>Name: {name}</p>}
          {showDetails && description && <p>Artist: {artist}</p>}
          {showDetails && description && <p>Description: {description}</p>}
          {showDetails && medium && <p>Medium: {medium}</p>}
          {showDetails && description && <p>Listed by: {user}</p>}
          {showDetails && description && <p>Price: {price}</p>}
        </div>
      </div>
      <ViewCard 
        artwork={{ imageUrl: image, name, artist, description, medium, price, user }} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Artwork;
