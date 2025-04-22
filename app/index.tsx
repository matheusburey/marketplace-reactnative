import { Text, View } from "react-native";
import Header from "../components/shared/Header";
import { Link } from "expo-router";

export default function LoginScreen() {
	return (
		<View className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<Text className="text-primary-text">login screen</Text>
			<Link className="text-primary-text" href="/(tabs)/">
				Home
			</Link>
		</View>
	);
}
