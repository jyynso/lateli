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
      <div className='group relative flex w-full min-w-0 flex-col'>
        <div className='group relative mx-auto aspect-square w-full max-w-64 overflow-hidden'>
          <img src={image} alt={name} onClick={() => setIsModalOpen(true)} 
            className='h-full w-full object-cover cursor-pointer transition-transform duration-200 hover:scale-103'/>
          <div aria-hidden='true' className='pointer-events-none absolute inset-0 flex items-end bg-black/50 p-3 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            <span className='font-medium'>{name}</span>
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-1 py-3 px-1'>
          {showDetails && description && <p>Name: {name}</p>}
          {showDetails && description && <p>Artist: {artist}</p>}
          {showDetails && description && <p>Description: {description}</p>}
          {showDetails && medium && <p>Medium: {medium}</p>}
          {showDetails && description && <p>Listed by: {user}</p>}
          {showDetails && description && <p>Price: {price}</p>}
        </div>
      </div>
    </>
  );
}

export default Artwork;
