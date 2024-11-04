import React from "react"

const SocialMediaButton: React.FC<{
	href: string
	className?: string
	imageSize: string
	imageSrc: string
	imageAlt: string
	text: string
}> = ({ href, className, imageSize, imageSrc, imageAlt, text }) => (
	<a
		href={href}
		className={`inline-flex items-center justify-center w-full px-5 font-medium text-center text-gray-900 border bg-white border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 ${className}`}>
		<img
			src={imageSrc}
			className={`w-${imageSize} h-${imageSize} mr-2 text-gray-500`}
			alt={imageAlt}
		/>
		{text}
	</a>
)

export default SocialMediaButton
