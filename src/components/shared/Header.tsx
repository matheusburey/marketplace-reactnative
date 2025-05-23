import Constants from "expo-constants";
import { router, useNavigation } from "expo-router";
import { Search } from "lucide-react-native";
import { useState } from "react";
import { Image, TextInput, View } from "react-native";

export default function Header() {
	const navigation = useNavigation();
	const [search, setSearch] = useState("");

	function handleSearch() {
		router.push(`/search?query=${search}`);
		setSearch("");
	}

	return (
		<View
			style={{ marginTop: Constants.statusBarHeight }}
			className="flex-row w-full h-24 px-5 items-center justify-between"
		>
			<Image
				className="w-20"
				resizeMode="contain"
				source={require("@/assets/images/app-icon.png")}
			/>
			<View className="flex-row w-4/6 bg-background rounded content-end items-center py-2 pr-2">
				<TextInput
					value={search}
					onChangeText={setSearch}
					placeholder="Pesquisar"
					onSubmitEditing={handleSearch}
					className="flex-1 py-0.5 px-3 text-secondary-text placeholder:text-secondary-text"
				/>
				<Search size={20} color="#C0C0C1" />
			</View>
		</View>
	);
}
