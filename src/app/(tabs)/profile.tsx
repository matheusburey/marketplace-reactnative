import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

import Constants from "expo-constants";
import ProfileInfo from "@/components/shared/ProfileInfo";
import UserProfileForm from "@/components/shared/UserProfileForm";
import { router } from "expo-router";

const stsBarHeight = Constants.statusBarHeight;

export default function ProfileScreen() {
	const ads = 0;
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

			<TouchableOpacity
				onPress={() => router.push("/ads")}
				activeOpacity={0.7}
				className="w-11/12 mx-auto mb-4"
			>
				<Text
					className={`text-primary-text text-base font-bold ${
						ads ? "text-center mt-7" : "mt-2"
					}`}
				>
					{ads
						? `Você possui ${ads} ${ads > 1 ? "anúncios" : "anúncio"}, veja!`
						: "Você ainda não possui anúncios, crie um agora!"}
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
