import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Edit2 } from "lucide-react-native";
import { router } from "expo-router";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";

export default function UserProfileForm() {
	const [edit, setEdit] = useState(false);
	return (
		<View className="w-11/12 mx-auto">
			<View className="items-end mt-auto mb-2">
				<TouchableOpacity
					activeOpacity={0.7}
					className="ml-2"
					onPress={() => setEdit(!edit)}
				>
					<Edit2 size={30} color="white" fill="white" />
				</TouchableOpacity>
			</View>
			<Input value="Matheus" editable={edit} />
			<Input value="email" editable={edit} />
			<Input value="11 99999-9999" editable={edit} />
			<Input placeholder="Senha" value="" secureTextEntry editable={edit} />
			{edit && (
				<>
					<Input
						placeholder="Nova Senha"
						value=""
						secureTextEntry
						editable={edit}
					/>
					<Input
						placeholder="Confirmar Senha"
						value=""
						secureTextEntry
						editable={edit}
					/>
					<Dropdown
						listItems={[{ value: "java", label: "Java" }]}
						enabled={edit}
					/>

					<Button
						className="mt-5"
						text="Salvar"
						onPress={() => Alert.alert("Salvar")}
					/>
				</>
			)}
			<Button
				className="mt-5 bg-transparent"
				text="Gerenciar Endereços"
				onPress={() => Alert.alert("Salvar")}
			/>
		</View>
	);
}
