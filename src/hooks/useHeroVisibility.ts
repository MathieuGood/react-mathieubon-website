import { useEffect, useState, useRef } from "react"

const useHeroVisibility = () => {
	const [isHeroOutOfView, setIsHeroOutOfView] = useState(false)
	const heroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsHeroOutOfView(!entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		const currentHeroRef = heroRef.current
		if (currentHeroRef) {
			observer.observe(currentHeroRef)
		}

		return () => {
			if (currentHeroRef) {
				observer.unobserve(currentHeroRef)
			}
		}
	}, [])

	return { isHeroOutOfView, heroRef }
}

export default useHeroVisibility
