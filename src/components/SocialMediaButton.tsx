import React from "react"

const SocialMediaButton: React.FC<{
	href: string
	divClassName?: string
	imageSize: string
	imageSrc: string
	imageAlt: string
	text: string
	textClassName?: string
}> = ({ href, divClassName, imageSize, imageSrc, imageAlt, text, textClassName }) => (
	<a
		href={href}
		className={`inline-flex items-center justify-center w-full px-5 font-medium text-center text-gray-900 border bg-white border-gray-200 rounded-lg xs:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 ${divClassName}`}>
		<img
			src={imageSrc}
			className={`w-${imageSize} h-${imageSize}  text-gray-500`}
			alt={imageAlt}
		/>
		<span className={textClassName}>{text}</span>
	</a>
)

export default SocialMediaButton
