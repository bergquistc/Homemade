import React from "react"
import {ScrollView} from "react-native"
import HomeRoot from "@/screens/home/HomeRoot"

import {StyleSheet} from "react-native"
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context"

export default function Index() {
	const insets = useSafeAreaInsets()

	return (
		<SafeAreaView style={{flex: 1}}>
			<HomeRoot />
		</SafeAreaView>
	)

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				style={{
					marginBottom: insets.bottom + 10,
					...styles.container
				}}
			>
				<HomeRoot />
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
