import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import Constants from "expo-constants";
import Button from "../components/ui/Button";

export default function LoginScreen() {
	const navigation = useNavigation();

	const handleLogin = async () => {
		navigation.navigate("(tabs)" as never);
	};

	return (
		<ScrollView
			className="flex-1 bg-background-light"
			style={{ paddingTop: Constants.statusBarHeight + 20 }}
		>
			<Image
				className="mx-auto w-56 h-56"
				resizeMode="contain"
				source={require("../assets/images/logo.png")}
			/>
			<View className="w-5/6 h-12 border border-border-color rounded mx-auto mt-5 bg-background">
				<TextInput
					placeholder="Email"
					className="flex-1 px-3 text-xl text-primary-text placeholder:text-secondary-text"
				/>
			</View>
			<View className="w-5/6 h-12 border border-border-color rounded mx-auto mt-5 bg-background">
				<TextInput
					placeholder="Senha"
					secureTextEntry
					className="flex-1 px-3 text-xl text-primary-text placeholder:text-secondary-text"
				/>
			</View>

			<Text className="font-bold mt-1 text-secondary-text text-right text-base mr-[10%]">
				Esqueci minha senha?
			</Text>
			<Button onPress={handleLogin} text="Entrar" className="mt-5" />
		</ScrollView>
	);
}
