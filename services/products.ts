import type { Product } from "../types/product";
import { api } from "./api";

export async function getAllProducts(): Promise<Product[]> {
    const res = await api.get("/products");
    const data = res.data;
    return data;
}