import Comic from "@ui/comic-component"
import fs from "fs"

/** ------------------------------------------------ **
 * Comic Route
 ** ------------------------------------------------ **/
export default function Page({
	params
}: {
	params: { slug: string }
}) {

	// TODO: Check if the current page url is correct
	// - compare it to the list of comic images
	// - Throw 404 if it doesn't find a comic

	return <>
		<Comic slug={params.slug} />
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

	// Loop through the comics and change the paths to just the names
	comics.forEach((comic, index) => {
		// Format the title - remove the date, the filename, and hyphens
		let title
		title = comic.replace(/\d{2,4}[\-]\d{1,2}[\-]\d{1,2}[\-]/g, "")
		title = title.replace(".jpg", "")
		title = title.replace("-", "")
		comics[index] = title
	})


	// Generate a static segment for every comic image
	return comics.map((filename) => ({
		// Remove the file extension
		slug: filename
		//slug: filename.replace(/(\.[^/.]+)+$/, "")
	}))
}