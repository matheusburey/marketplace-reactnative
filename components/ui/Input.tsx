import type { Dispatch, SetStateAction } from "react";
import { View, TextInput } from "react-native";
import { twMerge } from "tailwind-merge";

interface InputProps {
	value: string;
	placeholder?: string;
	secureTextEntry?: boolean;
	onChangeText?: (text: string) => void;
	className?: string;
}

export default function Input({
	value,
	onChangeText,
	secureTextEntry,
	placeholder,
	className,
}: InputProps) {
	return (
		<View
			className={twMerge(
				"w-full h-12 border border-border-color rounded mx-auto mt-5 bg-background",
				className,
			)}
		>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				className="flex-1 px-3 text-xl text-primary-text placeholder:text-secondary-text"
			/>
		</View>
	);
}
