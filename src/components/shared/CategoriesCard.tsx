import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ICategoryCardProps {
	category: ICategory;
}

export default function CategoriesCard({ category }: ICategoryCardProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => router.push(`/search?category=${category.id}`)}
			className="w-[8.5rem] min-h-48 rounded-md border border-border-color"
		>
			<Image
				className="w-full h-32"
				resizeMode="cover"
				source={{ uri: "https://picsum.photos/200" }}
			/>
			<View className="flex-1 p-2 justify-between">
				<View>
					<Text
						numberOfLines={2}
						className="text-secondary-text text-sm font-bold text-center"
					>
						{category.name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
