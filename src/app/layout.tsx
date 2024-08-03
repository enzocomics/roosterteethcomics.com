/** ------------------------------------------------ **/
// Styles
import "@styles/global.css"
import { copy, display } from '@styles/fonts'
import Image from "next/image"
import Link from "next/link"

/** ------------------------------------------------ **
 * Root Layout 
 ** ------------------------------------------------ **/

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${copy.variable} ${display.variable} bg-[#f5f5f5]`}>
			<body className="">
				<header className="p-5 bg-[#b73d3d] text-neutral-200 text-center text-sm">
					<Link className="max-w-4xl mx-auto" href="/">
						<Image className="pb-5 mx-auto" src="/img/logo.png" alt="" width="716" height="80" />
						<p>&copy; Rooster Teeth Productions, LLC   |   Written by Griffon Ramsey, Illustrated by Luke McKay, and Edited by Geoff Ramsey<br />
							RoosterTeethComics.com is an archive of the series of webcomics about the staff at Rooster Teeth that ran from 2006 to 2011</p>
					</Link>
				</header>
				<main className="p-10 max-w-4xl mx-auto text-gray-800">
					{children}
				</main>
				<footer className="grid grid-cols-5 gap-1 justify-center max-w-4xl mx-auto mb-12 text-center">
					<Link className="group/book" href="/comic/free-license">
						<Image className="group-hover/book:opacity-75 transition-opacity group-hover/book:duration-0 duration-700" src="/img/cover1.png" width="200" height="400" alt="" />
						<div className="group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase">Year 1</div>
					</Link>
					<Link className="group/book" href="/comic/hot-tempered">
						<Image className="group-hover/book:opacity-75 transition-opacity group-hover/book:duration-0 duration-700" src="/img/cover2.png" width="200" height="400" alt="" />
						<div className="group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase">Year 2</div>
					</Link>
					<Link className="group/book" href="/comic/double-vision">
						<Image className="group-hover/book:opacity-75 transition-opacity group-hover/book:duration-0 duration-700" src="/img/cover3.png" width="200" height="400" alt="" />
						<div className="group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase">Year 3</div>
					</Link>
					<Link className="group/book" href="/comic/ready-set-go">
						<Image className="group-hover/book:opacity-75 transition-opacity group-hover/book:duration-0 duration-700" src="/img/cover4.png" width="200" height="400" alt="" />
						<div className="group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase">Year 4</div>
					</Link>
					<Link className="group/book" href="/comic/evilangelical">
						<Image className="group-hover/book:opacity-75 transition-opacity group-hover/book:duration-0 duration-700" src="/img/cover5.png" width="200" height="400" alt="" />
						<div className="group-hover/book:text-black my-2 font-bold text-[#b73d3d] uppercase">Year 5</div>
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-1/id415593347" className="hover:text-black font-bold uppercase text-sm text-[#b73d3d]">
						Purchase Year 1 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-2/id415645922" className="hover:text-black font-bold uppercase text-sm text-[#b73d3d]">
						Purchase Year 2 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-3/id417339489" className="hover:text-black font-bold uppercase text-sm text-[#b73d3d]">
						Purchase Year 3 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-4/id426811202" className="hover:text-black font-bold uppercase text-sm text-[#b73d3d]">
						Purchase Year 4 on Apple Books
					</Link>
					<Link href="https://books.apple.com/us/book/rooster-teeth-comics-5/id474242405" className="hover:text-black font-bold uppercase text-sm text-[#b73d3d]">
						Purchase Year 4 on Apple Books
					</Link>
				</footer>
			</body>
		</html>
	)

}