import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

import Constants from "expo-constants";
import ProfileInfo from "@/components/shared/ProfileInfo";
import UserProfileForm from "@/components/shared/UserProfileForm";
import Button from "@/components/ui/Button";

const stsBarHeight = Constants.statusBarHeight;

export default function ProfileScreen() {
	const { logout } = useAuth();
	return (
		<ScrollView className="flex-1 bg-background-light dark:bg-background">
			<Text
				style={{ paddingTop: stsBarHeight }}
				className="text-primary-text text-xl font-bold text-center my-5"
			>
				MEU PERFIL
			</Text>
			<ProfileInfo />
			<View className="w-11/12 mx-auto h-px bg-border-color my-5" />
			<UserProfileForm />

			<Button onPress={logout} text="Logout" />
		</ScrollView>
	);
}
