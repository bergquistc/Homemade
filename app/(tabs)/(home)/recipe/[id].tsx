import FocusedRecipeRoot from "@/screens/home/focusedRecipe/FocusedRecipeRoot"
import React, {useMemo} from "react"
import {Pressable, ScrollView, View, Text} from "react-native"

import {StyleSheet} from "react-native"
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context"
import recipes from "@/media/food_categories/index"
import {useLocalSearchParams} from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"
import {router} from "expo-router"

export default function Index(props: any) {
	const insets = useSafeAreaInsets()

	const {id} = useLocalSearchParams()
	const recipeId = parseInt(id)

	const recipe = useMemo(() => {
		return recipes.find((node, i) => {
			return node.id === recipeId
		})
	}, [recipes, recipeId])

	const backButton = (
		<View style={styles.headerContainer}>
			<Pressable onPress={() => router.back()}>
				<AntDesign name="left" size={24} color="black" />
			</Pressable>
		</View>
	)

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				style={{
					marginBottom: insets.bottom + 10,
					...styles.container
				}}
			>
				<FocusedRecipeRoot recipe={recipe} />
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		padding: 18
	}
})
