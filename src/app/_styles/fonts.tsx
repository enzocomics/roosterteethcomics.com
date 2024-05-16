/** ------------------------------------------------ **/
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Bangers, Noto_Sans } from 'next/font/google'

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

const copy: NextFontWithVariable = Noto_Sans({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	variable: '--font-copy',
})

/** ------------------------------------------------ **/

export { copy, display }