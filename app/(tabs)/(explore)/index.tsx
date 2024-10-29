import React from "react"
import {ScrollView, Text} from "react-native"

import {StyleSheet} from "react-native"
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context"

export default function Index() {
	const insets = useSafeAreaInsets()
	console.log({insets})
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				style={{
					marginBottom: insets.bottom,
					...styles.container
				}}
			>
				<Text>Explore</Text>
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
