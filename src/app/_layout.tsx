import "@/assets/global.css";

import { StatusBar } from "expo-status-bar";
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
			/>
			<StatusBar style="auto" />
		</AuthProvider>
	);
}
