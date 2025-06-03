import { api } from "./api";

export async function getProducts(title?: string): Promise<IProduct[]> {
	const query = title ? `?title=${title}` : "";
	const res = await api.get(`/products${query}`);
	return res.data;
}

export async function getCategories(): Promise<ICategory[]> {
	const res = await api.get("/categories");
	return res.data;
}
