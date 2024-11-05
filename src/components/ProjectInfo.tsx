import React from "react"
import BulletPoint from "./BulletPoint"
import buttonsTextData from "../data/buttonsTextData.json"
import OpenGithubButton from "./OpenGithub"
import IconWithBubbleOnHover from "./IconWithBubbleOnHover"

interface Project {
	title: string
	description: string
	techStack: { src: string; alt: string }[]
	features: string[]
	githubLink: string
	mediaSrc: string
}

const ProjectInfo: React.FC<{ projectData: Project }> = ({ projectData }) => {
	return (
		<div>
			<div className="text-gray-500 sm:text-lg">
				<h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900">
					{projectData.title}
				</h2>
				<p className="mb-8 font-light lg:text-xl">{projectData.description}</p>

				<div className="tech-stack flex">
					{projectData.techStack.map(techItem => (
						<IconWithBubbleOnHover src={techItem.src} alt={techItem.alt} />
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

				<OpenGithubButton href={projectData.githubLink}>
					<img
						src="/images/github.svg"
						className="w-4 h-4 mr-2 text-gray-500"
						alt="GitHub Logo"
					/>
					{buttonsTextData[0].openGithubProject}
				</OpenGithubButton>
			</div>
		</div>
	)
}

export default ProjectInfo
