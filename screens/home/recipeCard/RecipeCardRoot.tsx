import {View, StyleSheet, Pressable} from "react-native"

import IRecipe from "@/types/IRecipe"
import RecipeCardHeader from "./RecipeCardHeader"
import RecipeCardMedia from "./RecipeCardMedia"
import RecipeCardFooter from "./RecipeCardFooter"
import {router} from "expo-router"
import {useCallback} from "react"

export default function RecipeCard({recipe}: {recipe: IRecipe | null}) {
	//***** Context  */

	//***** State  */

	//***** Functions */
	const onRecipePress = useCallback(() => {
		router.setParams("recipe_id", recipe?.id)
		router.push(`/recipe/${recipe?.id}`)
	}, [recipe?.id])

	return (
		<View style={styles.container}>
			<RecipeCardHeader recipe={recipe} />

			<Pressable onPress={onRecipePress}>
				<RecipeCardMedia recipe={recipe} />
			</Pressable>

			<RecipeCardFooter recipe={recipe} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		paddingVertical: 8
	}
})
