export interface ArtworkData {
	id: number;
	imageUrl: string;
	name: string;
	artist: string;
	description: string;
	medium: string;
	price: number;
	user: { name: string };
}