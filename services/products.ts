import { api } from "./api";

export async function getProducts(title?: string): Promise<IProduct[]> {
	const query = title ? `?title=${title}` : "";
	const res = await api.get(`/products${query}`);
	return res.data;
}

export async function postProduct(
	params: ICreateProductParams,
): Promise<IProduct> {
	const res = await api.post("/products", params);
	return res.data;
}
