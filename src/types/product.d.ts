interface ICategory {
	id: number;
	name: string;
}

interface ICreateProductParams {
	title: string;
	description: string;
	price: string;
	categoryId: string;
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
