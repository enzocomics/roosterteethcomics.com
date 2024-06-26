import fs from "fs"

// Import Date
import dayjs from "dayjs"
var customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)
/** ------------------------------------------------ **
 * Comic Component
 ** ------------------------------------------------ **/
export default function Comic({
	slug,
}: {
	slug: string
}
) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// Find the index of the current comic
	let comicIndex = comics.findIndex(comic => comic.includes(slug))

	let thisComic
	if (slug == "latest")
		thisComic = comics[comics.length - 1]
	else
		thisComic = comics[comicIndex]

	// Extract the date from the string
	const comicDate = thisComic.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	return <>
		<h2>{comics[comicIndex]}</h2>
		<h1 className="text-center pb-8">{comicDateFormatted}</h1>
		<p className="font-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</>
}