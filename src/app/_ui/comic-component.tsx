
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
	// Extract the date from the string
	const comicDate = slug.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	// Format the title - remove the date, the filename, and hyphens
	let title
	title = slug.replace(/\d{2,4}[\-]\d{1,2}[\-]\d{1,2}[\-]/g, "")
	title = title.replace(".jpg", "")
	title = title.replace("-", " ")

	return <>
		<h1 className="text-center pb-8">{comicDateFormatted}</h1>
		<p className="font-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</>
}