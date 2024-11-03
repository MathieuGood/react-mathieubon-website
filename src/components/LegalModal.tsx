import React from "react"
import legalNoticeData from "../data/legalNoticeData.json"

interface LegalModalProps {
	onClose: () => void
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
			onClick={handleBackgroundClick}>
			<div className="relative bg-white w-10/12 md:w-3/4 lg:w-3/4 max-w-[700px] max-h-screen p-6 rounded-lg shadow-lg overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Legal Notice</h2>

				{legalNoticeData.map((item, index) => {
					const [title, content] = Object.entries(item)[0]
					return (
						<div key={index} className="mt-4">
							<h3 className="text-base font-semibold">{title}</h3>
							<p className="text-xs text-gray-600">{content}</p>
						</div>
					)
				})}

				<div className="flex justify-center mt-6 sticky bottom-0 bg-white py-4">
					<button
						onClick={onClose}
						className="inline-flex items-center justify-center  px-8 py-2 mt-4 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition duration-300">
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

export default LegalModal
