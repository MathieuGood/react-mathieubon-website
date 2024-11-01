import React from "react"
import BulletPoint from "./BulletPoint"
import PrimaryColorButton from "./PrimaryColorButton"
import ProjectTechIcon from "./TechIcon"
import githubLogo from "/src/assets/images/github.svg"

interface Project {
	title: string
	description: string
	techStack: { src: string; alt: string }[]
	features: string[]
	githubLink: string
	mediaSrc: string
}

interface ProjectInfoProps {
	projectData: Project
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectData }) => {
	return (
		<div>
			<div className="text-gray-500 sm:text-lg">
				<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
					{projectData.title}
				</h2>
				<p className="mb-8 font-light lg:text-xl">{projectData.description}</p>

				<div className="tech-stack flex">
					{projectData.techStack.map((tech, techIndex: number) => (
						<ProjectTechIcon key={techIndex} src={tech.src} alt={tech.alt} />
					))}
				</div>

				<ul role="list" className="pt-4 space-y-5 -t border-gray-200 my-7">
					{projectData.features.map((feature, featureIndex: number) => (
						<li key={featureIndex} className="flex space-x-3">
							<BulletPoint className="w-5 h-5 text-primary-1" />
							<span className="text-base font-medium leading-tight text-gray-900">
								{feature}
							</span>
						</li>
					))}
				</ul>

				<PrimaryColorButton href={projectData.githubLink}>
					<img
						src={githubLogo}
						className="w-4 h-4 mr-2 text-gray-500"
						alt="GitHub Logo"
					/>
					Open on GitHub
				</PrimaryColorButton>
			</div>
		</div>
	)
}

export default ProjectInfo
