import { Metadata, ResolvingMetadata } from "next"
import Comic from "@ui/comic-component"
import fs from "fs"


/** ------------------------------------------------ **
 * Metadata
 ** ------------------------------------------------ **/

export async function generateMetadata({
	params
}: {
	params: {
		year: number,
		month: number,
		day: number
	}
}, parent: ResolvingMetadata
): Promise<Metadata> {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	const year = params.year
	const month = params.month
	const day = params.day

	// Retrieve the current comic, with fallback on the homepage
	const comicDate = year && month && day ? year + "_" + month + "_" + day : undefined
	const comicIndex = comicDate ? comics.findIndex(comic => comic.includes(comicDate)) : -1
	const thisComic = comicIndex == -1 ? comics[comics.length - 1] : comics[comicIndex]
	const comicTitle = thisComic.substring(11).slice(0, -4).replaceAll("_", " ")

	return {
		title: comicTitle
	}
}

/** ------------------------------------------------ **
 * Comic Route
 ** ------------------------------------------------ **/
export default function Page({
	params
}: {
	//params: { page: number }
	params: { year: number, month: number, day: number }
}) {

	return <>
		<Comic year={params.year} month={params.month} day={params.day} />
	</>
}

/** ------------------------------------------------ **
 * Dynamic Route - Comics
 * - Generate a static page for every comic slug
 ** ------------------------------------------------ **/

export function generateStaticParams() {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// Loop through the array and changed the paths to just the dates
	comics.forEach((comic, index) => {
		// Only grab the first ten characters of the filename (the date)
		let title = comic.substring(0, 10)
		comics[index] = title
	})

	// Generate a static segment for every comic 
	return comics.map((title, index) => ({
		year: title.substring(0, 4),
		month: title.substring(5, 7),
		day: title.substring(8, 10)

	}))

}