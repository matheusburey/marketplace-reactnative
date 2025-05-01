interface ICategory {
	id: number;
	name: string;
	slug: string;
	image: string;
	creationAt: string;
	updatedAt: string;
}

interface ICreateProductParams {
	title: string;
	description: string;
	price: number;
	categoryId: number;
	images: string[];
}

interface IProduct {
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
