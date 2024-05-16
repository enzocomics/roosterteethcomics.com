/** ------------------------------------------------ **/
// Styles
import "@styles/global.css"
import { copy, display } from '@styles/fonts'

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
				{children}
			</body>
		</html>
	)

}