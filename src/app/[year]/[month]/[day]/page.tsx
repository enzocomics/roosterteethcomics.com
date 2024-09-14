import { Metadata, ResolvingMetadata } from "next"
import Comic from "@ui/comic-component"
import fs from "fs"

/** ------------------------------------------------ **
 * Metadata
 ** ------------------------------------------------ **/

export async function generateMetadata(
	{ params, searchParams} : Props, parent: ResolvingMetadata
): Promise<Metadata> {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	const year = params.year
	const month = params.month
	const day = params.day

	// Retrieve the current comic, with fallback on the homepage
	const comicDate = year && month && day ? year + "-" + month + "-" + day : undefined
	const comicIndex = comicDate ? comics.findIndex(comic => comic.includes(comicDate)) : -1
	const thisComic = comicIndex == -1 ? comics[comics.length - 1] : comics[comicIndex]
	const comicTitle = thisComic.substring(11)

	console.log(comicTitle)
	return {
		title: "Title"
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

	// TODO: Check if the current page url is correct
	// - compare it to the list of comic images
	// - Throw 404 if it doesn't find a comic

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

	// Loop through the array and change the paths to just the names
	// comics.forEach((comic, index) => {
	// 	// Format the title - remove the date, the filename, and hyphens
	// 	// let title
	// 	// title = comic.replace(/\d{2,4}[\-]\d{1,2}[\-]\d{1,2}[\-]/g, "")
	// 	// title = title.replace(".jpg", "")
	// 	// title = title.replace(".png", "")
	// 	//title = title.replace("-", "")
	// 	comics[index] = title
	// })

	// Generate a static segment for every comic 
	return comics.map((title, index) => ({
		//page: (index + 1).toString()
		//page: title
		// 2008-10-12
		year: title.substring(0, 4),
		month: title.substring(5, 7),
		day: title.substring(8, 10)

	}))

}