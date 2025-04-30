import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IRoute = {
	index: undefined;
	register: undefined;
	"(tabs)": undefined;
};

type INavigationProp = NativeStackNavigationProp<IRoute>;
