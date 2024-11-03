import React from "react"
import ProjectInfo from "./ProjectInfo"
import ProjectMedia from "./ProjectMedia"
import projectsData from "../data/projectsData.json"
import ProjectSeparator from "./ProjectSeparator"

const ProjectsSection: React.FC = () => {
	return (
		<section className="bg-gray-200">
			<div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 md:pt-20 md:pb-10 lg:space-y-20 lg:pt-24 lg:pb-8 lg:px-16">
				<h2 className="text-4xl font-bold text-primary-1">Projects</h2>

				{projectsData.map((project, index) => (
					<React.Fragment key={index}>

						<div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
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
						<ProjectSeparator />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection
