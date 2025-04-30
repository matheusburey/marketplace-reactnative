import { Text, Image, ScrollView, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import Constants from "expo-constants";
import Button from "../components/ui/Button";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import type { INavigationProp } from "../types/route";
import Input from "../components/ui/Input";

export default function LoginScreen() {
	const navigation = useNavigation<INavigationProp>();
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
		navigation.navigate("(tabs)");
	}

	return (
		<ScrollView
			className="flex-1 px-6 bg-background-light"
			style={{ paddingTop: Constants.statusBarHeight + 20 }}
		>
			<Image
				className="mx-auto w-56 h-56"
				resizeMode="contain"
				source={require("../assets/images/logo.png")}
			/>
			<Input
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<Input
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
			/>

			<Text className="font-bold mt-2 text-secondary-text text-right text-base">
				Esqueci minha senha?
			</Text>
			<Button onPress={handleLogin} text="Entrar" className="mt-8" />
			<TouchableOpacity
				className="mt-5 flex-row items-center justify-center gap-1"
				onPress={() => navigation.navigate("register")}
			>
				<Text className="text-secondary-text text-sm">
					Voce ainda nao possui uma conta?
				</Text>
				<Text className="font-bold text-primary-text text-sm">
					Registre-se aqui!
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
