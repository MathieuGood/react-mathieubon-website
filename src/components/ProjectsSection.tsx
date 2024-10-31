import React from "react"
import ProjectInfo from "./ProjectInfo"
import ProjectMedia from "./ProjectMedia"
import projectsData from "../data/projectsData.json"

const ProjectsSection: React.FC = () => {
	return (
		<section className="bg-gray-100">
			<div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 md:py-20 lg:space-y-20 lg:py-24 lg:px-16">
				<h2 className="text-4xl font-bold text-primary-1">Projects</h2>

				{projectsData.map((project, index) => (
					<div
						key={index}
						className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
						{index % 2 === 0 ? (
							<>
								<ProjectInfo projectData={project} />
								<ProjectMedia mediaSrc={project.mediaSrc} />
							</>
						) : (
							<>
								<ProjectMedia mediaSrc={project.mediaSrc} />
								<ProjectInfo projectData={project} />
							</>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection
