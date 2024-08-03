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
	page,
}: {
	page?: number
}
) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)
	// Retrieve the current Comic
	const thisComic = page === undefined ? comics[comics.length - 1] : comics[page]

	// Extract the date from the string
	const comicDate = thisComic.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	return <>
		<h1 className="text-center mb-8">{comicDateFormatted}</h1>

		<ComicNav page={page} />

		<Image src={`/comic/img/${thisComic}`} alt="" width="9999" height="9999" className="mx-auto max-w-full" />

		{/* <ComicNav slug={slug} /> */}
		<ComicNav page={page} />
	</>
}

/** ------------------------------------------------ **
 * Retrieve a Comic by its Page Number/Index
 ** ------------------------------------------------ **/
function GetComicByIndex(index?: number) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	let fetchedComic
	if (index == undefined)
		fetchedComic = comics[comics.length - 1]
	else
		fetchedComic = comics[index - 1]

	return fetchedComic
}

/** ------------------------------------------------ **
 * Comic Navigation Component
 ** ------------------------------------------------ **/
function ComicNav({
	page,
}: {
	page?: number
}) {

	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// If no page is specified, default to the latest page
	let pageNum = page == undefined ? comics.length - 1 : page

	// Grey out the buttons if they are at the first/last
	const prevComic = pageNum == 1 ? undefined : (pageNum - 1).toString()
	const nextComic = pageNum == comics.length - 1 ? undefined : (Number(pageNum) + 1).toString()
	const firstComic = pageNum == 1 ? undefined : (1).toString()
	const lastComic = pageNum == comics.length - 1 ? undefined : (comics.length - 1).toString()

	const randomComic = (Math.floor(Math.random() * comics.length)).toString()

	return <>
		<nav className="grid grid-flow-col w-[500px] mx-auto my-6 text-center font-display text-3xl">
			<ComicLink href={firstComic}>&laquo; First</ComicLink>
			<ComicLink href={prevComic}>&lt; Prev</ComicLink>
			<ComicLink href={randomComic}>Random</ComicLink>
			<ComicLink href={nextComic}>Next &gt;</ComicLink>
			<ComicLink href={lastComic}>Last &raquo;</ComicLink>
		</nav>
	</>
}

/** ------------------------------------------------ **
 * Comic Navigation Link Component
 ** ------------------------------------------------ **/
function ComicLink({
	children,
	href
}: {
	children: ReactNode,
	href?: string
}) {
	if (href === undefined) {
		return <span className="opacity-50">{children}</span>
	} else {
		return <Link href={href} className="hover:text-red-900">{children}</Link>
	}
}