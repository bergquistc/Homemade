import IRecipe from "@/types/IRecipe"
import {Image} from "react-native"

function RecipeCardMedia({recipe}: {recipe: IRecipe | null}) {
	return (
		<Image
			source={recipe?.image}
			alt={"Food"}
			style={{
				width: "100%",
				height: 400,
				objectFit: "scale-down"
			}}
		/>
	)
}

export default RecipeCardMedia
