import { Text, View } from "react-native";
import Header from "../../components/shared/Header";

export default function CategoriesScreen() {
	return (
		<View className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<Text className="text-primary-text">Categories Screen</Text>
		</View>
	);
}
