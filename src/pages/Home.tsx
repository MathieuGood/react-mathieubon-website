import React, { useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import Footer from "../components/Footer"

const Home: React.FC = () => {
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
					contentElement.innerHTML += char === " " ? "&nbsp;" : char
					lineIndex++
					setTimeout(typeContent, 70)
				} else {
					contentElement.innerHTML += "<br />"
					lineIndex = 0
					contentIndex++
					setTimeout(typeContent, 500)
				}
			}
		}

		typeContent()

		return () => {
			contentElement.innerHTML = ""
		}
	}, [])

	return (
		<div>
			<Header />
			<Hero />
			<SkillsSection />
			<ProjectsSection />
			<Footer />
		</div>
	)
}

export default Home
