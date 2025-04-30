import { api } from "./api";

export async function getProducts(title?: string): Promise<Product[]> {
	const query = title ? `?title=${title}` : "";
	const res = await api.get(`/products${query}`);
	const data = res.data;
	return data;
}
