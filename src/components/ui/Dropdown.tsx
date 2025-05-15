import { View, Text } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { twMerge } from "tailwind-merge";

interface IDropdownProps {
	selectedValue?: string;
	setSelectedValue?: (value: string) => void;
	enabled?: boolean;
	listItems: { value: string; label: string }[];
}

export default function Dropdown({
	enabled,
	selectedValue,
	setSelectedValue,
	listItems,
}: IDropdownProps) {
	return (
		<View
			className={twMerge(
				"w-full h-12 mt-5 border border-border-color rounded justify-center",
				enabled ? "bg-background" : "bg-transparent",
			)}
		>
			<Picker
				enabled={enabled}
				style={{
					width: "100%",
					color: "white",
					fontSize: 18,
					fontWeight: "bold",
				}}
				selectedValue={selectedValue}
				onValueChange={setSelectedValue}
			>
				{listItems.map((e) => (
					<Picker.Item key={e.value} label={e.label} value={e.value} />
				))}
			</Picker>
		</View>
	);
}
