import React from "react"
import PrimaryColorButton from "./PrimaryColorButton"
import TechSkill from "./TechSkill"

const skills = [
	{
		src: "src/assets/images/tech-python.svg",
		alt: "Python Logo",
		title: "Python",
		description: "FastAPI, Django, Flask, SQLAlchemy, Pandas, Pytest"
	},
	{
		src: "src/assets/images/tech-react.svg",
		alt: "React Logo",
		title: "React",
		description: "React, React Native, Tailwind CSS, Material UI"
	},
	{
		src: "src/assets/images/tech-java.svg",
		alt: "Java Logo",
		title: "Java",
		description: "Maven, Spring, Hibernate, JPA, JavaFX, Swing, Vaadin"
	},
	{
		src: "src/assets/images/tech-docker.svg",
		alt: "Docker Logo",
		title: "Docker",
		description: "Containerization of applications for modular and scalable deployments"
	}
]

const SkillsSection: React.FC = () => {
	return (
		<section className="bg-white">
			<div className="items-center max-w-screen-xl px-4 py-8 mx-auto md:py-20 lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-16">
				<div className="col-span-2 mb-8">
					<h2 className="text-3xl lg:text-3xl font-bold text-primary-1">Skills and Tech Stack</h2>
					<p className="mt-3 mb-4 text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
						I bring a blend of business acumen and technical expertise to the table.
					</p>
					<p className="font-light text-gray-500 sm:text-xl">
						With a double degree in Business and Computer Science, I am a back-end
						developer with a strong focus on conceiving the best solutions for
						end-users.
					</p>
					<div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
						<PrimaryColorButton href="https://www.linkedin.com/in/mathieubon/">
							Check out my full resume
							<img src="/src/assets/images/arrow.svg" className="w-5 h-5 ml-1" />
						</PrimaryColorButton>
					</div>
				</div>
				<div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					{skills.map((skill, index) => (
						<TechSkill
							key={index}
							src={skill.src}
							alt={skill.alt}
							title={skill.title}
							description={skill.description}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection
