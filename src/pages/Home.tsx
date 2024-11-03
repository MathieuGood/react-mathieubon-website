import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import Footer from "../components/Footer"
import useHeroVisibility from "../hooks/useHeroVisibility"

const Home: React.FC = () => {
	const { isHeroOutOfView, heroRef } = useHeroVisibility()

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
