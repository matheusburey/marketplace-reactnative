interface Category {
	id: number;
	name: string;
	slug: string;
	image: string;
	creationAt: string;
	updatedAt: string;
}
interface Product {
	id: number;
	title: string;
	slug: string;
	price: number;
	description: string;
	category: Category;
	images: string[];
	creationAt: string;
	updatedAt: string;
	rating?: number;
}
