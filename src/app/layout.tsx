/** ------------------------------------------------ **/
// Styles
import "@styles/global.css"
import { display } from '@styles/fonts'

/** ------------------------------------------------ **
 * Root Layout 
 ** ------------------------------------------------ **/

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${display.variable}`}>
			<body>
				{children}
			</body>
		</html>
	)

}