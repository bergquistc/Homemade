import {View, StyleSheet, Pressable, Text} from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"
import {useCallback, useState} from "react"
import {RenderDifficultyMeter} from "@/components/utils/RecipeComponentUtils"

import IRecipe from "@/types/IRecipe"
import {router} from "expo-router"

function FocusedRecipeRoot({recipe}: {recipe: IRecipe}) {
	//***** Context  *******/

	//***** State  *******/
	const [isSaved, setIsSaved] = useState(false)

	//***** Hooks */
	const handlePressSave = useCallback(() => {
		setIsSaved(prev => !prev)
	}, [])

	//***** Functions */

	//***** Components */
	const header = (
		<View style={styles.header}>
			<Pressable onPress={() => router.back()}>
				<AntDesign name="left" size={24} color="black" />
			</Pressable>

			<Text style={styles.title}>{recipe?.name}</Text>

			<Pressable onPress={handlePressSave}>
				{isSaved ? (
					<AntDesign name="heart" size={24} color={"red"} />
				) : (
					<>
						<AntDesign name="hearto" size={24} color={"black"} />
					</>
				)}
			</Pressable>
		</View>
	)
	const authorDetails = (
		<View style={styles.authorContainer}>
			<View style={styles.authorImageContainer}>
				<AntDesign
					name={"user"}
					size={32}
					color={"orange"}
					style={styles.authorImage}
				/>
			</View>

			<View style={styles.authorDetailsContainer}>
				<Text style={styles.authorText}>{recipe?.author}</Text>
				<Text style={styles.authorSubtext}>Premium Member</Text>
			</View>

			<Pressable style={styles.authorFollowButton}>
				<AntDesign name={"plus"} size={18} />
				<Text>Follow</Text>
			</Pressable>
		</View>
	)
	const recipeStats = (
		<View style={styles.statsContainer}>
			<Text style={styles.statsCookTimeText}>
				Cook Time: {recipe?.cookTime} Minutes
			</Text>

			<RenderDifficultyMeter difficulty={recipe?.difficulty} />
		</View>
	)

	const authorNotes = (
		<>
			<Text>Author Notes</Text>
		</>
	)
	const ingredientDetails = (
		<View style={styles.ingredientContainer}>
			<Text style={styles.title}>Ingredients</Text>
			{recipe?.ingredients?.map((node, i) => {
				return (
					<View
						key={i}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 4
						}}
					>
						<Text>
							{node.quantity} - {node.title}
						</Text>
					</View>
				)
			})}
		</View>
	)
	const cookingSteps = (
		<View style={styles.cookingStepsContainer}>
			<Text style={styles.title}>Instructions</Text>
			{recipe?.instructions?.map((node, i) => {
				return (
					<View style={styles.cookingStepContainer} key={i}>
						<Text>{i + 1}.</Text>

						<Text style={{flexShrink: 1}}>{node.cooking_step}</Text>
					</View>
				)
			})}
		</View>
	)
	const nutritionFacts = (
		<>
			<Text>Nutrition Facts</Text>
		</>
	)
	const comments = (
		<>
			<Text>Comments</Text>
		</>
	)

	const divider = (
		<View
			style={{
				width: "100%",
				height: 1,
				marginVertical: 8,
				backgroundColor: "black"
			}}
		/>
	)

	if (!recipe) {
		return null
	}
	return (
		<View style={styles.container}>
			{header}
			{authorDetails}
			{recipeStats}
			{divider}
			{ingredientDetails}
			{divider}
			{cookingSteps}
			{divider}
			{nutritionFacts}
			{divider}

			{authorNotes}
			{comments}
		</View>
	)
}

export default FocusedRecipeRoot

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 28,
		padding: 12,
		marginBottom: 12
	},
	title: {
		fontSize: 22,
		fontWeight: "bold"
	},
	authorContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 18,
		paddingVertical: 16,
		gap: 12
	},
	statsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 18,
		marginBottom: 22
	},
	statsCookTimeText: {
		fontSize: 16,
		fontWeight: "bold"
	},

	authorImageContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "orange",
		borderRadius: 16,
		backgroundColor: "beige"
	},
	authorImage: {
		padding: 8,
		objectFit: "scale-down"
	},
	authorDetailsContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 8,
		flex: 1
	},
	authorText: {
		fontSize: 18,
		fontWeight: "bold"
	},
	authorSubtext: {
		fontSize: 14,
		color: "green"
	},
	authorFollowButton: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 4,
		padding: 8
	},

	ingredientContainer: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		justifyContent: "space-between",
		alignContent: "space-between",
		gap: 12,
		paddingHorizontal: 16
	},
	cookingStepsContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 16,
		paddingHorizontal: 16
	},
	cookingStepContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 12
	}
})
