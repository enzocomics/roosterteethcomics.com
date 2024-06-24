import Comic from "@ui/comic-component"
import fs from "fs"

/** ------------------------------------------------ **
 * Homepage **REQUIRED**
 ** ------------------------------------------------ **/
export default function Page() {
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)
	console.log(comics[0])
	return <>
		<Comic slug={comics[0]} />

	</>
}