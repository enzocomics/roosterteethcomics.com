import Comic from "@ui/comic-component"
import fs from "fs"

/** ------------------------------------------------ **
 * Comic Route
 ** ------------------------------------------------ **/
export default function Page() {
	return <>
		<Comic />
	</>
}

/** ------------------------------------------------ **
 * Dynamic Route - Comics
 * - Generate a static page for every comic slug
 ** ------------------------------------------------ **/

export function generateStaticParams() {
	const path = "public/comic/img"
	// Get a list of all the comics in the public/comics folder
	const comics = fs.readdirSync(path)
	// Generate a static segment for every comic image
	return comics.map((filename) => ({
		slug: filename
	}))
}