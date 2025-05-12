import { View, FlatList } from "react-native";
import Header from "../../components/shared/Header";
import { getProducts } from "../../services/products";
import { useEffect, useState } from "react";
import ProductCard from "../../components/shared/ProductCard";

export default function HomeScreen() {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getProducts();
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
