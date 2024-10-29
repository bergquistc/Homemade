import {View, Text, StyleSheet, Image, Button} from "react-native"
import AccountCircle from "@/media/icons/account_circle.svg"

function Component({user}: {user: any}) {
	//***** Context  */
	//***** State  */
	//***** Hooks */
	//***** Functions */
	//***** Components */

	return (
		<View style={styles.container}>
			<Text style={styles.username}>{user.name}</Text>
			<View style={styles.details}>
				<AccountCircle width={75} height={75} fill={"orange"} />

				<View style={styles.statsContainer}>
					<View style={styles.statContainer}>
						<Text>{user.numRecipes}</Text>
						<Text>Recipes</Text>
					</View>
					<View style={styles.statContainer}>
						<Text>{user.numFollowers}</Text>
						<Text>Followers</Text>
					</View>
					<View style={styles.statContainer}>
						<Text>{user.numFollowing}</Text>
						<Text>Following</Text>
					</View>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<Button title={"Edit Profile"} onPress={() => {}} />
				<Button title={"Share Profile"} onPress={() => {}} />
			</View>

			<View style={styles.divider} />
		</View>
	)
}

export default Component

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 12,
		padding: 24
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	username: {
		fontSize: 20,
		fontWeight: "bold"
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		gap: 22
	},
	statContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 4
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	actionButton: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 4,
		backgroundColor: "gray",
		color: "black"
	},
	divider: {
		marginVertical: 8,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#000000"
	}
})
