import IRecipe from "@/types/IRecipe"
import {createContext, useContext, useState} from "react"

const HomeContext = createContext(undefined)

function HomeContextProvider(props: any) {
	//***** Context  *******/
	//***** State  *******/
	const [focusedRecipe, setFocusedRecipe] = useState<IRecipe | null>(null)

	//***** Hooks */
	//***** Functions */
	//***** Components */

	return (
		<HomeContext.Provider
			value={{
				state: {focusedRecipe},
				actions: {
					updateFocusedRecipe: _node => setFocusedRecipe(_node)
				}
			}}
		>
			{props.children}
		</HomeContext.Provider>
	)
}

export default HomeContextProvider

export function useHomeContext() {
	const context = useContext(HomeContext)

	if (!context) {
		throw Error("Use within Provider")
	}

	return context
}
