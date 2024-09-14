import fs from "fs"

// Import Date
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import RandomComicButton from "./comic-random"
var customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)

/** ------------------------------------------------ **
 * Comic Component
 ** ------------------------------------------------ **/
export default function Comic({
	year,
	month,
	day
}: {
	year?: number,
	month?: number,
	day?: number
}) {

	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)

	// Retrieve the current comic, with fallback on the homepage
	const comicDate = year && month && day ? year + "-" + month + "-" + day : undefined
	const comicIndex = comicDate ? comics.findIndex(comic => comic.includes(comicDate)) : -1
	const thisComic = comicIndex == -1 ? comics[comics.length - 1] : comics[comicIndex]

	// Comic Date Display
	const comicDateFormatted = comicDate ? dayjs(comicDate).format("MMMM D, YYYY") : dayjs(comics[comics.length - 1].substring(0, 10).replaceAll("-", "/")).format("MMMM D, YYYY")

	// Output
	return <>
		<h1 className="text-center mb-8">{comicDateFormatted}</h1>
		<ComicNav index={comicIndex} />
		<Image src={`/comic/img/${thisComic}`} alt="" width="9999" height="9999" className="mx-auto max-w-full" />
		<ComicNav index={comicIndex} />
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
	index
}: {
	index?: number
}) {
	// Get a list of all the comics in the comic images folder
	const path = "public/comic/img"
	const comics = fs.readdirSync(path)
	const pageNum = (index == -1 || index == undefined) ? comics.length - 1 : index

	// Comic navigation buttons - grab links to the adjacent comics
	const firstComic = pageNum > 0 ? "/" + comics[0].substring(0, 10).replaceAll("-", "/") : undefined
	const prevComic = pageNum > 0 ? "/" + comics[pageNum - 1].substring(0, 10).replaceAll("-", "/") : undefined
	const nextComic = pageNum < comics.length - 1 ? "/" + comics[pageNum + 1].substring(0, 10).replaceAll("-", "/") : undefined
	const lastComic = pageNum < comics.length - 1 ? "/" + comics[comics.length - 1].substring(0, 10).replaceAll("-", "/") : undefined

	// Random comic button

	return <>
		<nav className="grid grid-flow-col w-[500px] mx-auto my-6 text-center font-display text-3xl">
			<ComicLink href={firstComic}>&laquo; First</ComicLink>
			<ComicLink href={prevComic}>&lt; Prev</ComicLink>
			<RandomComicButton comics={comics}>Random</RandomComicButton>
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