/** ------------------------------------------------ **
 * Comic Component
 ** ------------------------------------------------ **/
export default function Comic({
	slug,
}: {
	slug: string
}
) {
	// Format the title - remove the date, the filename, and hyphens
	let title
	title = slug.replace(/\d{2,4}[\-]\d{1,2}[\-]\d{1,2}[\-]/g, "")
	title = title.replace(".jpg", "")
	title = title.replace("-", " ")

	return <>
		<h1 className="font-display text-6xl">{title}</h1>
		<p className="font-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</>
}