import fs from "fs"

// Import Date
import dayjs from "dayjs"
import Image from "next/image"
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

	console.log(comics, thisComic)

	// Extract the date from the string
	const comicDate = thisComic.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	return <>
		<h1 className="text-center pb-8">{comicDateFormatted}</h1>
		<Image src={`/comic/img/${thisComic}`} alt="" width="600" height="1000" className="mx-auto" />
	</>
}