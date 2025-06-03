import { FlatList, ScrollView, Text, View } from "react-native";
import Header from "../../components/shared/Header";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/products";
import CategoriesCard from "@/components/shared/CategoriesCard";
import { Scroll } from "lucide-react-native";

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
		<ScrollView className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<View className="flex-1 gap-3 py-10 justify-center flex-row flex-wrap">
				{categories.map((category) => (
					<CategoriesCard key={category.id} category={category} />
				))}
			</View>
		</ScrollView>
	);
}
