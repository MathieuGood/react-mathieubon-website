import React from "react"

const OpenResumeModalButton: React.FC<{
	onClick: React.MouseEventHandler<HTMLButtonElement>
	text: string
	imageSrc?: string
}> = ({ onClick, text, imageSrc }) => {
	return (
		<button
			onClick={onClick}
			className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
			{text}

			{imageSrc && <img src={imageSrc} className="w-5 h-5 ml-1" />}
		</button>
	)
}

export default OpenResumeModalButton
