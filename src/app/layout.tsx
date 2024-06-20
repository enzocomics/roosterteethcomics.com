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
				<header className="bg-red">
					<Image src="/img/logo.png" alt="" width="716" height="80" />
				</header>
				{children}
			</body>
		</html>
	)

}