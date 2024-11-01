import React, { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import Footer from "../components/Footer"

const Home: React.FC = () => {
	const heroRef = useRef<HTMLDivElement | null>(null)
	const [isHeroOutOfView, setIsHeroOutOfView] = useState(false)

	useEffect(() => {
		const contentElement = document.querySelector(".content")

		const terminalContent = [
			"$ python3",
			">>> from mathieubon import skills",
			">>> print(skills)",
			"{ 'Web': ['FastAPI', 'Flask', 'Django'],",
			"  'ORM + Validation': ['SQLAlchemy', 'Pydantic'],",
			"  'Tests': 'Pytest',",
			"  'Data': ['Pandas', 'Numpy','Matplotlib'] }"
		]

		let contentIndex = 0
		let lineIndex = 0

		const typeContent = () => {
			if (contentIndex < terminalContent.length) {
				const line = terminalContent[contentIndex]
				if (lineIndex < line.length) {
					const char = line[lineIndex]
					if (contentElement) {
						contentElement.innerHTML += char === " " ? "&nbsp;" : char
					}
					lineIndex++
					setTimeout(typeContent, 70)
				} else {
					if (contentElement) {
						contentElement.innerHTML += "<br />"
					}
					lineIndex = 0
					contentIndex++
					setTimeout(typeContent, 500)
				}
			}
		}

		typeContent()

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsHeroOutOfView(!entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		if (heroRef.current) {
			observer.observe(heroRef.current)
		}

		return () => {
			if (contentElement) {
				contentElement.innerHTML = ""
			}
			if (heroRef.current) {
				observer.unobserve(heroRef.current)
			}
		}
	}, [])

	return (
		<div>
			{isHeroOutOfView && <Header />}
			<div ref={heroRef}>
				<Hero />
			</div>
			<SkillsSection />
			<ProjectsSection />
			<Footer />
		</div>
	)
}

export default Home
