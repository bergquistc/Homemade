import IRecipe from "@/types/IRecipe"
import {useMemo, useState} from "react"
import {View, Text, StyleSheet, Button} from "react-native"
import {RenderDifficultyMeter} from "@/components/utils/RecipeComponentUtils"

function RecipeCardFooter({recipe}: {recipe: IRecipe | null}) {
	//***** State  *******/
	const [isLiked, setIsLiked] = useState(false)

	//***** Hooks */
	const renderDifficultyMeter = useMemo(() => {
		return <RenderDifficultyMeter difficulty={recipe?.difficulty} />
	}, [recipe?.difficulty])

	//***** Functions */

	//***** Components */

	return (
		<View
			style={{
				flexDirection: "column",
				padding: 8,
				gap: 8
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 1
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 4
					}}
				>
					<Text>Difficulty:</Text>
					{renderDifficultyMeter}
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 4
					}}
				>
					<Text>Cook Time:</Text>
					<Text style={{color: "blue"}}>
						{recipe.cookTime} Minutes
					</Text>
				</View>
			</View>
			<Text style={{color: "gray"}}>{recipe.description}</Text>

			{/* Number of comments / button to look at comments */}
			<Text style={{color: "gray"}}>5 Comments</Text>
		</View>
	)
}

export default RecipeCardFooter

const styles = StyleSheet.create({})
