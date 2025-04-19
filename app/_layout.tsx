import { StatusBar } from "expo-status-bar";
import "../assets/global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: "transparent" },
					animation: "fade",
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
			<StatusBar style="auto" />
		</>
	);
}
