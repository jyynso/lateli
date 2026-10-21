import { useState } from "react";
import Artwork from "../components/Artwork"
import type { ArtworkData } from "../data/types"
import { mockArtworks } from "../data/ArtworkDummyData"

function ArtworkContainer() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [artworks, setArtworks] = useState<ArtworkData[]>(mockArtworks);

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),16rem))] justify-center gap-4 stagger-fade-in">
			{!loading && !error && (
				artworks.map((artwork: any) => (
					<Artwork 
						key={artwork.id}
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
	);
}

export default ArtworkContainer;