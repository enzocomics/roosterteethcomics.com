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
	// Retrieve the current Comic
	const thisComic = GetComicBySlug(slug)
	// Extract the date from the string
	const comicDate = thisComic.substring(0, 10)
	const comicDateFormatted = dayjs(comicDate).format("MMMM D, YYYY")

	return <>
		<h1 className="text-center mb-8">{comicDateFormatted}</h1>

		<ComicNav slug={slug} />

		<Image src={`/comic/img/${thisComic}`} alt="" width="9999" height="9999" className="mx-auto max-w-full" />

		<ComicNav slug={slug} />
	</>
}

/** ------------------------------------------------ **
 * Retrieve a Comic by its Slug
 ** ------------------------------------------------ **/
function GetComicBySlug(slug: string) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// Find the index of the comic that matches the provided slug
	let comicIndex
	comicIndex = comics.findIndex(comic => comic.includes(slug))

	// The homepage won't have a slug, so just display the latest comic
	let fetchedComic
	if (slug == "latest")
		fetchedComic = comics[comics.length - 1]
	else
		fetchedComic = comics[comicIndex]

	return fetchedComic
}

/** ------------------------------------------------ **
 * Comic Navigation Component
 ** ------------------------------------------------ **/
function ComicNav({
	slug,
}: {
	slug: string
}) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// Find the index of the current comic
	// The homepage wont' have a slug, so just get the last comic
	let comicIndex
	if (slug == "latest")
		comicIndex = comics.length - 1
	else
		comicIndex = comics.findIndex(comic => comic.includes(slug))

	// Loop through the list of comics and reformat the titles to remove the date & filename
	comics.forEach((comic, index) => {
		let title
		title = comic.replace(/\d{2,4}[\-]\d{1,2}[\-]\d{1,2}[\-]/g, "")
		title = title.replace(".jpg", "")
		title = title.replace(".png", "")
		comics[index] = title
	})

	// Find the indices of the previous and next comic, based on the current comic's Index
	const prevComic = comicIndex === undefined ? undefined : comics[comicIndex - 1]
	const nextComic = comicIndex === undefined ? undefined : comics[comicIndex + 1]

	// The first & last comic buttons grey out if the current comic is first/last
	const firstComic = prevComic === undefined ? undefined : comics[0]
	const lastComic = nextComic === undefined ? undefined : comics[comics.length - 1]

	return <>
		<nav className="grid grid-flow-col w-[500px] mx-auto my-6 text-center font-display text-3xl">
			<ComicLink href={firstComic}>&laquo; First</ComicLink>
			<ComicLink href={prevComic}>&lt; Prev</ComicLink>
			<ComicLink href="#">Random</ComicLink>
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
		return <Link href={"/comic/" + href} className="hover:text-red-900">{children}</Link>
	}
}