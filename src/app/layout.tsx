/** ------------------------------------------------ **/
// Styles
import "@styles/global.css"
import { copy, display } from '@styles/fonts'
import Image from "next/image"

/** ------------------------------------------------ **
 * Root Layout 
 ** ------------------------------------------------ **/

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${copy.variable} ${display.variable}`}>
			<body>

				<header className="p-5 bg-red-900 text-neutral-200 text-center text-sm">
					<div className="max-w-4xl mx-auto">
						<Image className="pb-5 mx-auto" src="/img/logo.png" alt="" width="716" height="80" />
						<p>&copy; Rooster Teeth Productions, LLC   |   Written by Griffon Ramsey, Illustrated by Luke McKay, and Edited by Geoff Ramsey<br />
							RoosterTeethComics.com is an archive of the series of webcomics about the staff at Rooster Teeth that ran from 2006 to 2011</p>
					</div>
				</header>
				<main className="p-10 max-w-4xl mx-auto">
					{children}
				</main>
			</body>
		</html>
	)

}