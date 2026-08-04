import { BasketIcon } from "@phosphor-icons/react/dist/ssr";
import Popup from "./PopupText";

type ArtworkProps = {
    image: string;
    name: string;
    artist: string;
    description: string;
    medium: string;
    price: number;
    user: string;
    onAddToCart: () => void;
    
}

function Artwork({ image, name, artist, description, medium, price, user, onAddToCart }: ArtworkProps) {
  return (
    <div className='flex flex-col w-full lg:w-74 rounded-md transition-transform duration-200 hover:scale-103 hover:shadow-lg bg-(--bg-card) drop-shadow'>
      <Popup text="view artwork"/>
      <img src={image} alt={name} className='rounded-t-md h-70 object-cover'/>
      <div className='flex flex-1 flex-col gap-1 p-5'>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <p>Artist: {artist}</p>
        <p className="line-clamp-2">Description: {description}</p>
        <p>Medium: {medium}</p>
        <p>Sold by: {user}</p>
          <div className='mt-auto flex items-center justify-between'>
            <p className='text-lg font-semibold'>₱ {price}</p>
            <button 
              onClick={onAddToCart} 
              className='ml-auto rounded-full cursor-pointer p-2 shadow-md backdrop-blur-sm hover:bg-(--accent-sandyBrown) transition-all duration-50  bg-(--bg-white)'>
              <BasketIcon size={30} />
            </button>
          </div>
      </div>
    </div>
  );
}

export default Artwork;
