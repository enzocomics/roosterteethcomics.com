import fs from "fs"

// Import Date
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
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

	// The homepage won't have a slug, so just display the latest comic
	let thisComic
	if (slug == "latest")
		thisComic = comics[comics.length - 1]
	else
		thisComic = comics[comicIndex]

	// Extract the date from the string
	const comicDate = thisComic.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	return <>
		<h1 className="text-center mb-8">{comicDateFormatted}</h1>

		<ComicNav slug={slug} />

		<Image src={`/comic/img/${thisComic}`} alt="" width="600" height="1000" className="mx-auto" />

		<ComicNav slug={slug} />
	</>
}

function ComicNav({
	slug,
}: {
	slug: string
}) {
	return <>
		<nav className="grid grid-flow-col w-[500px] mx-auto my-6 text-center font-display text-3xl">
			<ComicLink href="#">&laquo; First</ComicLink>
			<ComicLink href="#">&lt; Prev</ComicLink>
			<ComicLink href="#">Random</ComicLink>
			<ComicLink href="#">Next &gt;</ComicLink>
			<ComicLink href="#">Last &raquo;</ComicLink>
		</nav>
	</>
}

function ComicLink({
	children,
	href
}: {
	children: ReactNode,
	href: URL | "#"
}) {
	return <>
		<Link href={href} className="hover:text-red-900">{children}</Link>
	</>
}