import React, { useState, useEffect } from 'react';
import LegalModal from './LegalModal'; // Import the LegalModal component

const Footer: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

	// Function to open the modal
	const openModal = () => {
		setIsModalOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Effect to disable scrolling when the modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden'; // Disable scrolling
		} else {
			document.body.style.overflow = 'auto'; // Enable scrolling
		}

		// Cleanup function to reset overflow when the component unmounts
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isModalOpen]);

	return (
		<footer className="footer">
			<div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-12 md:p-8 lg:p-10">
				<div className="text-center">
					<span className="block text-sm text-center text-gray-500">
						© 2024 Mathieu Bon.
						<a
							onClick={openModal}
							className="ml-2 text-primary-1 hover:underline cursor-pointer">
							Legal Notice
						</a>
						.
					</span>
				</div>
			</div>
			{isModalOpen && <LegalModal onClose={closeModal} />}
		</footer>
	);
};

export default Footer;
