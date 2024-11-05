import React from "react"
import PdfViewer from "./PdfViewer"

const ResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
			onClick={handleBackgroundClick}>
			<div className="relative bg-white w-10/12 md:w-3/4 lg:w-3/4 max-w-[800px] max-h-screen p-2 rounded-lg shadow-lg overflow-y-auto">
				<PdfViewer pdfUrl="src/assets/pdf/cv_mathieu_bon.pdf" />
			</div>
		</div>
	)
}

export default ResumeModal
