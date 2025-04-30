import { StatusBar } from "expo-status-bar";
import "../assets/global.css";

import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout() {
	return (
		<AuthProvider>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: "transparent" },
					animation: "fade",
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="register" />
				<Stack.Screen name="(tabs)" />
			</Stack>
			<StatusBar style="auto" />
		</AuthProvider>
	);
}
