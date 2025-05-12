import { Text, View } from "react-native";
import Header from "../../components/shared/Header";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/ui/Button";

export default function ProfileScreen() {
	const { logout } = useAuth();
	return (
		<View className="flex-1 bg-background-light dark:bg-background">
			<Header />
			<Text className="text-primary-text">Profile Screen</Text>
			<Button text="Logout" onPress={logout} />
		</View>
	);
}
