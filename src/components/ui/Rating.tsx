import { Star } from "lucide-react-native";
import { View } from "react-native";

export default function Rating({
	rate,
	size = 15,
}: { rate: number; size?: number }) {
	const fullStars = Math.round(rate);
	const numberStars = Array.from({ length: 5 }, (_, index) => index);
	return (
		<View className="flex-row items-center">
			{numberStars.map((i) => (
				<Star
					key={i}
					fill={i < fullStars ? "yellow" : "none"}
					color="yellow"
					size={size}
				/>
			))}
		</View>
	);
}
