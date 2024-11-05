import React, { useState } from "react"
import ProjectTechIcon from "./ProjectTechIcon"

const IconWithBubbleOnHover: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<span className="relative inline-block">
				<ProjectTechIcon src={src} alt={alt} />

				{isHovered && (
					<span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white border-2 border-primary-1 rounded-lg p-2 text-sm z-10 shadow-lg">
						{alt}
						<span className="absolute left-1/2 transform -translate-x-1/2 -top-2 border-x-4 border-b-4 border-transparent border-b-primary-1"></span>
					</span>
				)}
			</span>
		</div>
	)
}

export default IconWithBubbleOnHover
