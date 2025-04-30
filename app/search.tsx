import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import Header from "../components/shared/Header";
import ProductCard from "../components/shared/ProductCard";
import { FlatList, View } from "react-native";

export default function SearchScreen() {
	const { query } = useLocalSearchParams();
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getProducts(query as string);
				setProducts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

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
