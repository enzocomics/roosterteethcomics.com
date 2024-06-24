import Comic from "@ui/comic-component"
import fs from "fs"

/** ------------------------------------------------ **
 * Homepage **REQUIRED**
 ** ------------------------------------------------ **/
export default function Page() {
	// Get the paths of the comics folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)
	const lastComic = comics[comics.length - 1]

	return <>
		<Comic slug={lastComic} />

	</>
}