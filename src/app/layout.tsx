/** ------------------------------------------------ **/
// Styles
import "@styles/global.css"
import { copy, display } from "@styles/fonts"
// Next.js
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"


/** ------------------------------------------------ **
 * Global Metadata
 ** ------------------------------------------------ **/

export const metadata: Metadata = {
	title: {
		template: "%s | Rooster Teeth Comics",
		default: "Rooster Teeth Comics"
	},
	description: "RoosterTeethComics.com is an archive of the series of webcomics about the staff at Rooster Teeth that ran from 2006 to 2011.",
	keywords: ["Rooster Teeth", "comics", "webcomic"],
	authors: [
		{ name: "Griffon Ramsey", url: "https://www.instagram.com/griffonramsey" },
		{ name: "Luke McKay", url: "https://lukemckay.com" },
		{ name: "Geoff Ramsey", url: "https://www.instagram.com/geofflramsey" },
	],
	publisher: "Rooster Teeth Productions, LLC",
	metadataBase: new URL("https://roosterteethcomics.com"),
	openGraph: {
		title: "Rooster Teeth Comics",
		description: "RoosterTeethComics.com is an archive of the series of webcomics about the staff at Rooster Teeth that ran from 2006 to 2011.",
		url: "https://roosterteethcomics.com",
		siteName: "Rooster Teeth Comics",
		images: [
			{
				url: "https://roosterteethcomics.com/img/cover1.png",
				width: 240,
				height: 301,
				alt: "Rooster Teeth Comics"
			}
		],
		locale: "en_US",
		type: "website",
	}

}
/** ------------------------------------------------ **
 * Root Layout 
 ** ------------------------------------------------ **/

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const analyticsID = process.env.NEXT_PUBLIC_ANALYTICS_ID!

	return (
		<html lang="en" className={`${copy.variable} ${display.variable} bg-[#f5f5f5]`}>
			<body className="min-w-80">
				<header className="px-2 py-3 sm:p-5 bg-[#b73d3d] text-neutral-200 text-center text-xs md:text-sm">
					<Link className="max-w-4xl mx-auto" href="/">
						<Image className="pb-1.5 sm:pb-5 mx-auto max-w-full" src="/img/logo.png" alt="" width="716" height="80" />
						<p className="text-pretty">&copy; Rooster Teeth Productions, LLC<span className="hidden sm:inline"> &nbsp; | &nbsp; </span><span className="inline-block sm:inline"><span className="text-nowrap">Written by Griffon Ramsey,</span> <span className="text-nowrap">Illustrated by Luke McKay,</span> <span className="text-nowrap">and Edited by Geoff Ramsey</span></span><br />
							RoosterTeethComics.com is an archive of the series of webcomics about the staff at Rooster Teeth that ran from 2006 to 2011</p>
					</Link>
				</header>
				<main className="px-2 py-3 sm:p-10 max-w-4xl mx-auto text-gray-800">
					{children}
				</main>
				<aside className="grid grid-cols-5 gap-1 justify-center max-w-4xl mx-auto my-6 px-2 sm:px-10 text-center">
					<Link className="group/book" href="/2006/08/22">
						<Image className="lg:group-hover/book:opacity-75 transition-opacity lg:group-hover/book:duration-0 duration-700" src="/img/cover1.png" width="200" height="400" alt="" />
						<div className="lg:group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase text-xs md:text-base">Year 1</div>
					</Link>
					<Link className="group/book" href="/2007/08/18">
						<Image className="lg:group-hover/book:opacity-75 transition-opacity lg:group-hover/book:duration-0 duration-700" src="/img/cover2.png" width="200" height="400" alt="" />
						<div className="lg:group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase text-xs md:text-base">Year 2</div>
					</Link>
					<Link className="group/book" href="/2008/08/16">
						<Image className="lg:group-hover/book:opacity-75 transition-opacity lg:group-hover/book:duration-0 duration-700" src="/img/cover3.png" width="200" height="400" alt="" />
						<div className="lg:group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase text-xs md:text-base">Year 3</div>
					</Link>
					<Link className="group/book" href="/2009/08/18">
						<Image className="lg:group-hover/book:opacity-75 transition-opacity lg:group-hover/book:duration-0 duration-700" src="/img/cover4.png" width="200" height="400" alt="" />
						<div className="lg:group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase text-xs md:text-base">Year 4</div>
					</Link>
					<Link className="group/book" href="/2010/08/19">
						<Image className="lg:group-hover/book:opacity-75 transition-opacity lg:group-hover/book:duration-0 duration-700" src="/img/cover5.png" width="200" height="400" alt="" />
						<div className="lg:group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase text-xs md:text-base">Year 5</div>
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-1/id415593347" className="lg:hover:text-black font-bold uppercase text-xs md:text-sm text-[#b73d3d]">
						Purchase Year 1 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-2/id415645922" className="lg:hover:text-black font-bold uppercase text-xs md:text-sm text-[#b73d3d]">
						Purchase Year 2 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-3/id417339489" className="lg:hover:text-black font-bold uppercase text-xs md:text-sm text-[#b73d3d]">
						Purchase Year 3 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-4/id426811202" className="lg:hover:text-black font-bold uppercase text-xs md:text-sm text-[#b73d3d]">
						Purchase Year 4 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-5/id474242405" className="lg:hover:text-black font-bold uppercase text-xs md:text-sm text-[#b73d3d]">
						Purchase Year 4 on Apple Books
					</Link>
				</aside>
				<footer>
					<Link href="https://github.com/enzocomics/roosterteethcomics.com" target="_blank" className="flex justify-center content-center text-xs text-center p-3 uppercase text-gray-500 italic lg:hover:underline">
						<Image className="inline mx-1" alt="" src="/img/icon-github.svg" width="16" height="16" /> This site was built in a cave with a box of scraps
					</Link>
				</footer>
				<Script
					strategy="beforeInteractive"
					src="https://analytics.cuek.co/script.js"
					data-website-id={analyticsID}
				/>
			</body>
		</html>
	)

}