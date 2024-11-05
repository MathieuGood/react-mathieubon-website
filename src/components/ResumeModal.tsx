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
			<div className="bg-green-700 relative w-full h-auto max-w-3xl max-h-full">
				<PdfViewer pdfUrl="src/assets/pdf/cv_mathieu_bon.pdf" />
			</div>
		</div>
	)
}

export default ResumeModal
