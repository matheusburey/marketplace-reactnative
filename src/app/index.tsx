import { useEffect, useState } from "react";
import { Text, Image, ScrollView, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import Constants from "expo-constants";
import Button from "../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import type { INavigationProp } from "../types/route";
import Input from "../components/ui/Input";
import type { AxiosError } from "axios";

export default function LoginScreen() {
	const navigation = useNavigation<INavigationProp>();
	const { login, token } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			if (!email || !password) {
				Alert.alert("Preencha todos os campos");
				return;
			}
			await login({ email, password });
			navigation.navigate("(tabs)" as never);
		} catch (error) {
			const err = error as AxiosError<{ status?: number }>;
			if (err?.status === 404) {
				return Alert.alert("Email ou senha inválidos");
			}

			return Alert.alert("Estamos com problemas tente novamente mais tarde");
		}
	};

	useEffect(() => {
		if (token) {
			navigation.navigate("(tabs)");
		}
	}, [token, navigation]);

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
			<Input placeholder="Email" value={email} onChangeText={setEmail} />
			<Input
				placeholder="Senha"
				value={password}
				secureTextEntry
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
