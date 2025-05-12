import { TouchableOpacity, Text } from "react-native";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
	text: string;
	className?: string;
	onPress?: () => void;
}

export default function Button({ text, className, onPress }: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={twMerge(
				"w-full min-h-10 justify-center items-center bg-primary-button mx-auto rounded-md",
				className,
			)}
		>
			<Text className="text-lg font-bold text-primary-text">{text}</Text>
		</TouchableOpacity>
	);
}
