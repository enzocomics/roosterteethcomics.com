/** ------------------------------------------------ **/
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Bangers } from 'next/font/google'

/** ------------------------------------------------ **
 * Webfont Variables
 ** ------------------------------------------------ **/

const display: NextFontWithVariable = Bangers({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	variable: '--font-display',
})
/** ------------------------------------------------ **/

export { display }