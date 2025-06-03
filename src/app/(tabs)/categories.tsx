import { FlatList, Text, View } from "react-native";
import Header from "../../components/shared/Header";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/products";
import CategoriesCard from "@/components/shared/CategoriesCard";

export default function CategoriesScreen() {
	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getCategories();
				setCategories(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<View className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<FlatList
				data={categories}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <CategoriesCard category={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: 16, paddingBottom: 40 }}
			/>
		</View>
	);
}
