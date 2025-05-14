import { View, Text } from "react-native";
import React from "react";
import Rating from "../ui/Rating";

export default function ProfileInfo() {
	return (
		<>
			<View className="w-11/12 mx-auto border border-border-color rounded-md py-3 px-4 bg-background">
				<View className="flex-row justify-between align-start mb-5">
					<View className="">
						<Text className="font-bold text-xl text-primary-text">Matheus</Text>
						<Text className="text-lg text-primary-text">11 99999-9999</Text>
					</View>
					<Rating rate={3} size={20} />
				</View>
				<Text className="text-sm font-bold text-primary-text">
					usuário desde 2022
				</Text>
				<Text className="text-sm font-bold text-primary-text">
					150 publicações
				</Text>
			</View>
			<View className="w-11/12 mx-auto h-px bg-border-color my-5" />
		</>
	);
}
