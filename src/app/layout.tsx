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
				<footer>
					<Link href="/comic/free-license">Year 1</Link>
					<Link href="/comic/hot-tempered">Year 2</Link>
					<Link href="/comic/double-vision">Year 3</Link>
					<Link href="/comic/ready-set-go">Year 4</Link>
					<Link href="/comic/evilangelical">Year 5</Link>
				</footer>
			</body>
		</html>
	)

}