import React from "react"

interface LegalModalProps {
	onClose: () => void // Prop to handle closing the modal
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
	// Close modal if clicking outside content
	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
			onClick={handleBackgroundClick}>
			<div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg relative">
				<h2 className="text-2xl font-bold mb-4">Legal Notice</h2>

				<h3 className="text-lg font-semibold mt-4">Website Disclaimer</h3>
				<p className="text-sm text-gray-600">
					The content on this website is provided for informational purposes only and is
					intended for a fictional portfolio demonstration. All examples, data, and
					references to businesses are purely illustrative. Any resemblance to real
					persons, living or dead, or real events is purely coincidental.
				</p>

				<h3 className="text-lg font-semibold mt-4">Copyright and Credits</h3>
				<p className="text-sm text-gray-600">
					All images are sourced from Unsplash and are licensed for free use. Icons and
					graphics are provided by Heroicons under an open-source license. Credit is
					extended to these creators for their resources. The source code for this site is
					available on GitHub for educational purposes.
				</p>

				<div className="flex justify-center mt-6">
					<button
						onClick={onClose}
						className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

export default LegalModal
