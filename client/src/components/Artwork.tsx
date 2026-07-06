type ArtworkProps = {
    image: string;
    name: string;
    artist: string;
    description: string;
    medium: string;
    price: number;
    
}

function Artwork({ image, name, artist, description, medium, price }: ArtworkProps) {
  return (
    <div className = 'flex flex-col w-72 rounded-md bg-(--bg-card) drop-shadow'>
      <img src={image} alt={name} className='rounded-t-md h-75 object-cover'/>
        <div className='p-4'>
          <h1 className='text-lg font-semibold'>{name}</h1>
          <p>artist: {artist}</p>
          <p>desc: {description}</p>
          <p>medium: {medium}</p>
          <p className='text-lg font-semibold'>₱ {price}</p>
        </div>
    </div>
  );
}

export default Artwork;
