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
						<div className="items-center gap-8 grid lg:grid-cols-2 xl:gap-16">
							<>
								<div className={index % 2 === 0 ? "order-1 lg:order-2" : ""}>
									<ProjectInfo projectData={project} />
								</div>
								<div className={index % 2 === 0 ? "order-2 lg:order-1" : ""}>
									<ProjectMedia mediaSrc={project.mediaSrc} />
								</div>
							</>
						</div>
						<ProjectSeparator />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection
