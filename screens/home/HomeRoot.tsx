import React from "react"
import recipes from "@/media/food_categories/index"
import RecipeCard from "./recipeCard/RecipeCardRoot"
import CustomFlatList from "@/components/CustomFlatList"
import {View, StyleSheet, Text, Image, ScrollView} from "react-native"

import HamburgerLogo from "@/media/icons/hamburger_icon.svg"

function HomeRoot(props: any) {
	//***** Context  *******/

	//***** State  *******/

	//***** Hooks */

	//***** Functions */

	//***** Components */
	const headerComponent = (
		<View style={styles.header}>
			<Image
				source={require("@/public/logo.png")}
				style={styles.headerLogo}
			/>
		</View>
	)
	const stickyComponent = (
		<ScrollView horizontal>
			<View style={styles.sticky}>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"orange"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"blue"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"green"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"yellow"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"black"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"green"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"yellow"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"black"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"green"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"yellow"} />
				</View>
				<View style={styles.foodCategoryItem}>
					<HamburgerLogo width={30} height={30} fill={"black"} />
				</View>
			</View>
		</ScrollView>
	)

	return (
		<View style={styles.container}>
			<CustomFlatList
				data={recipes}
				style={styles.list}
				renderItem={props => <RecipeCard recipe={props.item} />}
				HeaderComponent={headerComponent}
				StickyElementComponent={stickyComponent}
				TopListElementComponent={null}
			/>
		</View>
	)

	return recipes?.map((node, i) => {
		return (
			<React.Fragment key={i}>
				<RecipeCard recipe={node} />
			</React.Fragment>
		)
	})
}

export default HomeRoot

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		overflow: "hidden",
		backgroundColor: "#fff"
	},
	header: {
		justifyContent: "center",
		alignItems: "center",
		height: 75,
		marginBottom: 6,
		width: "100%"
	},
	headerLogo: {
		height: 50
	},
	item: {
		borderColor: "green",
		borderWidth: 5,
		// height: 100,
		marginBottom: 6,
		width: "100%"
	},
	list: {
		overflow: "hidden"
	},
	sticky: {
		flexDirection: "row",
		flexWrap: "nowrap",
		gap: 8,
		padding: 12,
		width: "100%",
		backgroundColor: "#fff"
	},
	foodCategoryItem: {
		padding: 6,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderRadius: 25,
		borderColor: "#000",
		alignItems: "center",
		justifyContent: "center",
		width: 50,
		height: 50
	}
})
