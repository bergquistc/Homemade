import ProfileHeader from "@/screens/profile/ProfileHeader"
import React from "react"
import {ScrollView, Text, View} from "react-native"

import {StyleSheet} from "react-native"
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context"

const user = {
	name: "Alea Bergquist",
	bio: "I love to make baked goods.",
	gender: "female",
	age: 27,
	numRecipes: 13,
	numRecipiesPublic: 10,
	numRecipesPrivate: 3,
	numFollowers: 18942,
	numFollowing: 12
}

export default function Index() {
	const insets = useSafeAreaInsets()
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				style={{
					marginBottom: insets.bottom,
					...styles.container
				}}
			>
				<ProfileHeader user={user} />
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	}
})
