import React from "react"

const OpenGithubButton: React.FC<{ href: string; children: React.ReactNode }> = ({
	href,
	children
}) => {
	return (
		<a
			href={href}
			className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
			target="_blank">
			{children}
		</a>
	)
}

export default OpenGithubButton
