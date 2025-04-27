import { TouchableOpacity, Text } from "react-native";
import { twMerge } from "tailwind-merge";

export default function Button({
	text,
	className,
	onPress,
}: {
	text: string;
	className?: string;
	onPress?: () => void;
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={twMerge(
				"w-10/12 min-h-10 justify-center items-center bg-primary-button mx-auto rounded-md",
				className,
			)}
		>
			<Text className="text-lg font-bold text-primary-text">{text}</Text>
		</TouchableOpacity>
	);
}
