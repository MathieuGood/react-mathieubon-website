import React from "react"

const ProjectMedia: React.FC<{ mediaSrc: string }> = ({ mediaSrc: path }) => {
	return (
		<div className="flex justify-center items-center mt-8 lg:mt-0 lg:order-2">
			{path.endsWith("mp4") ? (
				<video
					autoPlay
					loop
					muted
					playsInline
					className="h-100 mb-4 rounded-lg lg:mb-0 lg:flex">
					<source src={path} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			) : (
				<img src={path} className="h-100 mb-4 rounded-lg lg:mb-0 lg:flex" />
			)}
		</div>
	)
}

export default ProjectMedia
