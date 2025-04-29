import { Text, View, Image, TextInput, ScrollView, Alert } from "react-native";
import { useNavigation } from "expo-router";
import Constants from "expo-constants";
import Button from "../components/ui/Button";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen() {
	const navigation = useNavigation();
	const { login, token } = useAuth();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			if (!username || !password) {
				Alert.alert("Preencha todos os campos");
				return;
			}
			await login({ username, password });
			navigation.navigate("(tabs)" as never);
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			console.log("Error on login:", error?.message);
			console.log("Error on login:", JSON.stringify(error));
			if (error?.message === "Network Error") {
				Alert.alert("Sem conexão com o servidor");
			}
			if (error?.status === 400) {
				Alert.alert("Username ou senha inválidos");
			}
		}
	};

	if (token) {
		navigation.navigate("(tabs)" as never);
	}

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
					value={username}
					onChangeText={setUsername}
					placeholder="Username"
					className="flex-1 px-3 text-xl text-primary-text placeholder:text-secondary-text"
				/>
			</View>
			<View className="w-5/6 h-12 border border-border-color rounded mx-auto mt-5 bg-background">
				<TextInput
					value={password}
					onChangeText={setPassword}
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
