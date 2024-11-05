import React, { useEffect, useState } from "react"
import OpenResumeModalButton from "./OpenResumeModalButton"
import TechSkill from "./TechSkill"
import skillsData from "../data/skillsData.json"
import buttonTextData from "../data/buttonsTextData.json"
import ResumeModal from "./ResumeModal"

const SkillsSection: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// const openModal = () => {
	// 	setIsModalOpen(true)
	// }

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
		<section className="bg-white">
			<div className="items-center max-w-screen-xl px-4 py-8 mx-auto md:py-20 lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-16">
				<div className="col-span-2 mb-8">
					<h2 className="text-3xl lg:text-4xl font-bold text-primary-1">
						{skillsData[0].title}
					</h2>
					<p className="mt-3 mb-4 text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
						{skillsData[0].subtitle}
					</p>
					<p className="font-light text-gray-500 sm:text-xl">
						{skillsData[0].description}
					</p>
					<div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
						<OpenResumeModalButton
							// onClick={openModal}
							onClick={() => {
								window.open("https://linkedin.com/in/MathieuBon", "_blank")
							}}
							text={buttonTextData[0].resume}
							imageSrc="/images/arrow.svg"
						/>
					</div>
				</div>
				<div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					{skillsData[0].techStack.map((skill, index) => (
						<TechSkill
							key={index}
							src={skill.src}
							alt={skill.alt}
							title={skill.title}
							description={skill.description}
						/>
					))}
				</div>
				{isModalOpen && <ResumeModal onClose={closeModal} />}
			</div>
		</section>
	)
}

export default SkillsSection
