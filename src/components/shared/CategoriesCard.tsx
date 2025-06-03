import { Image, Text, TouchableOpacity, View } from "react-native";

interface ICategoryCardProps {
	category: ICategory;
}

export default function CategoriesCard({ category }: ICategoryCardProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			className="w-11/12 mx-2 flex-row min-h-36"
		>
			<Image
				className="w-32 rounded-l-md"
				resizeMode="cover"
				source={{ uri: "https://picsum.photos/200" }}
			/>
			<View className="flex-1 rounded-r-md border border-border-color p-2 justify-between">
				<View>
					<Text
						numberOfLines={2}
						className="text-secondary-text text-sm font-bold"
					>
						{category.name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
