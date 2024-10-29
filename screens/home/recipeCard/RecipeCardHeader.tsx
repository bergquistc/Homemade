import IRecipe from "@/types/IRecipe"
import {Text, View, StyleSheet, Image} from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

function RecipeCardHeader({recipe}: {recipe: IRecipe | null}) {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Text style={styles.title}>{recipe?.name}</Text>
				<Text style={styles.author}>{recipe?.author}</Text>
			</View>

			<View style={styles.ratingContainer}>
				<FontAwesome name="thumbs-o-up" size={22} color="black" />
				<Text style={styles.ratingText}>{recipe?.rating}%</Text>
			</View>
		</View>
	)
}

export default RecipeCardHeader

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
		gap: 16
	},
	leftContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 4,
		flex: 4
	},
	title: {
		fontSize: 20
	},
	author: {
		fontSize: 16,
		color: "gray"
	},
	ratingContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		flex: 1
	},
	starContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	ratingStar: {
		padding: 0,
		margin: 0
	},
	ratingText: {
		fontSize: 18,
		color: "orange"
	},
	cuisineCategoryImage: {
		width: 40,
		height: 40,
		objectFit: "scale-down",
		borderRadius: 100
	}
})
