import FontAwesome from "@expo/vector-icons/FontAwesome"
import {Tabs} from "expo-router"

export const NAVIGATION_HEIGHT = 75
export default function TabLayout() {
	return (
		<Tabs
			initialRouteName={"(home)"}
			screenOptions={{
				tabBarActiveTintColor: "orange",
				headerShown: false,
				tabBarStyle: {position: "absolute"}
			}}
		>
			<Tabs.Screen
				name="(home)"
				options={{
					title: "Home",
					tabBarIcon: ({color}) => (
						<FontAwesome size={28} name={"home"} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name="(explore)"
				options={{
					title: "Explore",
					tabBarIcon: ({color}) => (
						<FontAwesome size={28} name={"compass"} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name="(profile)"
				options={{
					title: "Profile",
					tabBarIcon: ({color}) => (
						<FontAwesome size={28} name={"user"} color={color} />
					)
				}}
			/>

			{/* Main Screen Hidden - Used for initial redirect only */}
			<Tabs.Screen
				name="index"
				options={{
					href: null
				}}
			/>
		</Tabs>
	)
}
