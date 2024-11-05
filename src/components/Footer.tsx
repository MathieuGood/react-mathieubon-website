import React, { useState, useEffect } from "react"
import LegalModal from "./LegalModal"
import legalData from "../data/legalData.json"

const Footer: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}

		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isModalOpen])

	return (
		<footer className="footer">
			<div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-12 md:p-8 lg:p-10">
				<div className="text-center">
					<span className="block text-sm text-center text-gray-500">
						© 2024 Mathieu Bon.
						<a
							onClick={openModal}
							className="ml-2 text-primary-1 hover:underline cursor-pointer">
							{legalData[0].title}
						</a>
						.
					</span>
				</div>
			</div>
			{isModalOpen && <LegalModal onClose={closeModal} />}
		</footer>
	)
}

export default Footer
