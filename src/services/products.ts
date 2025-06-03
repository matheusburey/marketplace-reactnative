import { api } from "./api";

export async function getProducts(
	title?: string,
	category?: string,
): Promise<IProduct[]> {
	const query = new URLSearchParams("_embed=category");
	if (title) query.append("title", title);
	if (category) query.append("categoryId", category);

	const res = await api.get(`/products?${query}`);
	return res.data;
}

export async function getCategories(): Promise<ICategory[]> {
	const res = await api.get("/categories");
	return res.data;
}
