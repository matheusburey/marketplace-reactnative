import { View, FlatList } from "react-native";
import Header from "../../components/shared/Header";
import { getAllProducts } from "../../services/products";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import ProductCard from "../../components/shared/ProductCard";

export default function HomeScreen() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getAllProducts();
				setProducts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<View className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<FlatList
				data={products}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <ProductCard product={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: 16, paddingBottom: 40 }}
			/>
		</View>
	);
}
