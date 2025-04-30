import { Heart } from "lucide-react-native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Rating from "../ui/Rating";

interface ProductListProps {
	product: Product;
}

export default function ProductCard({ product }: ProductListProps) {
	const [isFavorite, setIsFavorite] = useState(false);
	const price = product.price.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			className="w-11/12 mx-2 flex-row min-h-36"
		>
			<Image
				className="w-32 rounded-l-md"
				resizeMode="cover"
				source={{ uri: product.images[0] }}
			/>
			<View className="flex-1 rounded-r-md border border-border-color p-2 justify-between">
				<View>
					<Text className="text-secondary-text text-xs mb-2">{price}</Text>
					<Text
						numberOfLines={2}
						className="text-secondary-text text-sm font-bold"
					>
						{product.title}
					</Text>
				</View>
				<View className="flex-row justify-between items-end">
					<View>
						<Text className="text-secondary-text font-bold text-sm mb-2">
							{product.category.name}
						</Text>
						<Rating rate={product.rating || 3} />
					</View>
					<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
						<Heart fill={isFavorite ? "#F64348" : "#4C4C4C"} size={30} />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
}
