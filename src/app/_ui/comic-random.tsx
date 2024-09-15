"use client"
/** ------------------------------------------------ **/
// React & Next Libraries
import { ReactElement, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function RandomComicButton({
	children,
	comics,
}: {
	children?: any
	comics: string[]
}) {

	// React variables
	const [wasClicked, setClicked] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (wasClicked == true) {

			// Get a random comic index
			const randomIndex = Math.floor(Math.random() * comics.length)
			const randomComic = "/" + comics[randomIndex].substring(0, 10).replaceAll("_", "/")
			// Push to the link
			router.push(randomComic)
			//
			setClicked(false)
		}
	})

	return <button className="hover:text-red-900" onClick={() => { setClicked(true) }}>{children}</button>

}

