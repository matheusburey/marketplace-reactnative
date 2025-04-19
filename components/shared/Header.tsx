import Constants from "expo-constants";
import { Image, TextInput, View } from "react-native";

export default function Header() {
	return (
		<View
			style={{ marginTop: Constants.statusBarHeight }}
			className="flex-row w-full h-24 px-5 items-center justify-between"
		>
			<Image
				className="w-24"
				resizeMode="contain"
				source={require("../../assets/images/horizontal-logo.png")}
			/>
			<View className="flex-row w-4/6 bg-background rounded content-end items-center">
				<TextInput
					placeholder="Pesquisar"
					className="flex-1 py-0.5 px-3 placeholder:text-secondary-text"
				/>
				<Image
					className="w-4 mr-2"
					resizeMode="contain"
					source={require("../../assets/images/horizontal-logo.png")}
				/>
			</View>
		</View>
	);
}
