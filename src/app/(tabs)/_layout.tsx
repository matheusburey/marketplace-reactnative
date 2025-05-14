import { Redirect, Tabs } from "expo-router";
import {
	CirclePlus,
	House,
	LayoutGrid,
	MessageSquareMore,
	User,
} from "lucide-react-native";
import { Platform } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function TabLayout() {
	const { token } = useAuth();

	if (!token) {
		return <Redirect href="/login" />;
	}

	return (
		<Tabs
			initialRouteName="index"
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: { position: "absolute" },
					default: {
						backgroundColor: "#171717",
						borderTopWidth: 0,
						paddingTop: 5,
					},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ color }) => <House size={30} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="chat"
				options={{
					tabBarIcon: ({ color }) => (
						<MessageSquareMore size={30} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="register"
				options={{
					tabBarIcon: ({ color }) => <CirclePlus size={30} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="categories"
				options={{
					tabBarIcon: ({ color }) => <LayoutGrid size={30} color={color} />,
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ color }) => <User size={30} color={color} />,
				}}
			/>
		</Tabs>
	);
}
