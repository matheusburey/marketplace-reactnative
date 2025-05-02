import { ScrollView, Text, View } from "react-native";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Constants from "expo-constants";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/products";

export default function RegisterScreen() {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [form, setForm] = useState<ICreateProductParams>({
		categoryId: "",
		description: "",
		images: ["https://i.imgur.com/HqYqLnW.jpeg"],
		price: "",
		title: "",
	});

	async function handleSubmitProduct() {
		console.log(form);
	}

	useEffect(() => {
		(async () => {
			try {
				const data = await getCategories();
				setCategories(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<ScrollView
			className="flex-1 bg-background-light px-8"
			style={{ paddingTop: Constants.statusBarHeight + 20 }}
		>
			<Text className="font-bold my-8 text-primary-text text-center text-xl">
				Cadastro de produtos
			</Text>
			<Input
				placeholder="Título"
				value={form.title}
				onChangeText={(text) => setForm({ ...form, title: text })}
			/>
			<Input
				placeholder="Preço"
				value={form.price}
				onChangeText={(text) => setForm({ ...form, price: text })}
			/>
			<Input
				placeholder="Descrição"
				value={form.description}
				onChangeText={(text) => setForm({ ...form, description: text })}
			/>
			<View className="w-full h-12 border justify-center border-border-color rounded mx-auto mt-5 bg-background">
				<Picker
					selectedValue={form.categoryId}
					onValueChange={(itemValue) =>
						setForm({ ...form, categoryId: itemValue })
					}
					dropdownIconColor="#FFF"
					style={{ color: "#FFF" }}
				>
					{categories.map((category) => (
						<Picker.Item
							key={category.id}
							label={category.name}
							value={category.id}
						/>
					))}
				</Picker>
			</View>

			<Button
				onPress={handleSubmitProduct}
				text="Cadastrar"
				className="mt-14"
			/>
		</ScrollView>
	);
}
