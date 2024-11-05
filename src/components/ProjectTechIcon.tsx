import React from "react"

interface ProjectTechIconProps {
	src: string
	alt: string
}

const ProjectTechIcon: React.FC<ProjectTechIconProps> = ({ src, alt }) => {
	return (
	<img src={src} className="w-auto h-8 mx-2" alt={alt} />

	)
}

export default ProjectTechIcon
