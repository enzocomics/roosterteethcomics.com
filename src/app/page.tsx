import Comic from "@ui/comic-component"

import fs from "fs"
/** ------------------------------------------------ **
 * Homepage **REQUIRED**
 ** ------------------------------------------------ **/
export default function Page() {
	const path = "public/comic/img"
	console.log(fs.readdirSync(path))
	return <>
		<Comic />

	</>
}