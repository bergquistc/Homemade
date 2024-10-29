interface IRecipe {
	name: string
	description: string
	cookTime: number
	ingredients: object
	instructions: object
	cuisineCategory: string
	difficulty: number
	rating: number
	thumbnailImage: null
	likeButton: null
	likeCount: number
	bookmark: boolean
	author: string
	image: any
	comments: object
}
export default IRecipe
