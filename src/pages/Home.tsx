import React from "react"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import Project from "../components/Project"
import { customColors } from "../styles/customColors"
import presentationText from "../assets/presentationText"
import TopBanner from "../components/TopBanner"

const Home: React.FC = () => {
	return (
		<div>
			<Navbar />

			<TopBanner
				text="Hello, my name is Mathieu. I am a full stack developer."
				image="src/assets/images/avatar-working-on-computer.png"
			/>

			<Section title="About me" sx={{ backgroundColor: customColors.primaryYellow }}>
				<p>{presentationText}</p>
			</Section>

			<Section title="Projects" sx={{ backgroundColor: customColors.backgroundWhite }}>
				<Project
					name="Ultraskate Dashboard"
					description="An app to see Ultraskate stats"
					image="https://picsum.photos/200/300"
					runProjectLink="https://ultraskate-dashboard.netlify.app/"
					githubLink="https://github.com/MathieuGood/UltraskateDashboard"
				/>
			</Section>
		</div>
	)
}

export default Home
