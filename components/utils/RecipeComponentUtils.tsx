import IRecipe from "@/types/IRecipe"
import {useMemo} from "react"
import {View} from "react-native"

export function RenderDifficultyMeter({
	difficulty
}: {
	difficulty: number | null
}) {
	if (difficulty === null) {
		return null
	}
	const color = useMemo(() => {
		if (difficulty >= 90) {
			return "red"
		}
		if (difficulty >= 70) {
			return "orange"
		}
		if (difficulty >= 30) {
			return "yellow"
		}
		return "green"
	}, [difficulty])
	return (
		<View
			style={{
				position: "relative",
				width: 50,
				height: 6,
				borderRadius: 4,
				borderWidth: 1
			}}
		>
			<View
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					height: "100%",
					width: `${difficulty}%`,
					backgroundColor: color,
					borderRadius: 4
				}}
			/>
		</View>
	)
}
