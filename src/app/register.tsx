import { Text, ScrollView, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import Constants from "expo-constants";
import Button from "../components/ui/Button";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import type { INavigationProp } from "../types/route";
import Input from "../components/ui/Input";

export default function RegisterScreen() {
	const navigation = useNavigation<INavigationProp>();
	const { register } = useAuth();
	const [form, setForm] = useState<IRegisterUserParams>({
		name: "",
		email: "",
		password: "",
		phone_number: "",
	});

	const handleRegister = async () => {
		try {
			if (!form.name || !form.email || !form.password || !form.phone_number) {
				Alert.alert("Preencha todos os campos");
				return;
			}
			await register(form);
			navigation.navigate("(tabs)" as never);
		} catch (error) {
			Alert.alert("Sem conexão com o servidor");
		}
	};

	return (
		<ScrollView
			className="flex-1 bg-background-light px-8"
			style={{ paddingTop: Constants.statusBarHeight + 20 }}
		>
			<TouchableOpacity
				activeOpacity={0.7}
				className="ml-2"
				onPress={() => navigation.goBack()}
			>
				<ArrowLeft size={30} color="white" />
			</TouchableOpacity>
			<Text className="font-bold my-8 text-primary-text text-center text-xl">
				Registre-se
			</Text>
			<Input
				placeholder="Nome"
				value={form.name}
				onChangeText={(text) => setForm({ ...form, name: text })}
			/>
			<Input
				placeholder="Email"
				value={form.email}
				keyboardType="email-address"
				onChangeText={(text) => setForm({ ...form, email: text })}
			/>
			<Input
				placeholder="Senha"
				value={form.password}
				secureTextEntry
				onChangeText={(text) => setForm({ ...form, password: text })}
			/>
			<Input
				placeholder="Telefone"
				value={form.phone_number}
				keyboardType="phone-pad"
				maxLength={11}
				onChangeText={(text) => setForm({ ...form, phone_number: text })}
			/>

			<Button onPress={handleRegister} text="Registrar" className="mt-14" />
		</ScrollView>
	);
}
