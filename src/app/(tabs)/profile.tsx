import { ScrollView, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

import Constants from "expo-constants";
import ProfileInfo from "@/components/shared/ProfileInfo";
import UserProfileForm from "@/components/shared/UserProfileForm";

const stsBarHeight = Constants.statusBarHeight;

export default function ProfileScreen() {
	const { logout } = useAuth();
	return (
		<ScrollView
			style={{ paddingTop: stsBarHeight }}
			className="flex-1 bg-background-light dark:bg-background"
		>
			<Text className="text-primary-text text-xl font-bold text-center my-5">
				MEU PERFIL
			</Text>
			<ProfileInfo />
			<UserProfileForm />
		</ScrollView>
	);
}
