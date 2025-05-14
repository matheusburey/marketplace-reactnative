import { View, TextInput, type TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface InputProps extends TextInputProps {
	className?: string;
}

export default function Input({ className, editable, ...rest }: InputProps) {
	return (
		<View
			className={twMerge(
				"w-full h-12 border border-border-color rounded mx-auto mt-5",
				editable ? "bg-background" : "bg-transparent",
				className,
			)}
		>
			<TextInput
				className="flex-1 px-3 text-xl text-primary-text placeholder:text-secondary-text"
				editable={editable}
				{...rest}
			/>
		</View>
	);
}
