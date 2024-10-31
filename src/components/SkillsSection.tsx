import React from "react"

const SkillsSection: React.FC = () => {
	return (
		<section className="bg-white">
			<div className="items-center max-w-screen-xl px-4 py-8 mx-auto md:py-20 lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-16">
				<div className="col-span-2 mb-8">
					<h2 className="text-4xl font-bold text-primary-1">Skills and Tech Stack</h2>
					<p className="mt-3 mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
						I bring a blend of business acumen and technical expertise to the table.
					</p>
					<p className="font-light text-gray-500 sm:text-xl">
						With a double degree in Business and Computer Science, I am a back-end
						developer with a strong focus on conceiving the best solutions for
						end-users.
					</p>
					<div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
						<div>
							<a
								href="https://www.linkedin.com/in/mathieubon/"
								className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
								Check out my full resume
								<svg
									className="w-5 h-5 ml-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					<div>
						<img
							src="src/assets/images/tech-python.svg"
							className="w-10 h-10 mb-2"
							alt="Python Logo"
						/>
						<h3 className="mb-2 text-2xl font-bold">Python</h3>
						<p className="font-light text-gray-500">
							FastAPI, Django, Flask, SQLAlchemy, Pandas, Pytest
						</p>
					</div>
					<div>
						<img
							src="src/assets/images/tech-react.svg"
							className="w-10 h-10 mb-2"
							alt="React Logo"
						/>
						<h3 className="mb-2 text-2xl font-bold">React</h3>
						<p className="font-light text-gray-500">
							React, React Native, Tailwind CSS, Material UI
						</p>
					</div>
					<div>
						<img
							src="src/assets/images/tech-java.svg"
							className="w-10 h-10 mb-2"
							alt="Java Logo"
						/>
						<h3 className="mb-2 text-2xl font-bold">Java</h3>
						<p className="font-light text-gray-500">
							Maven, Spring, Hibernate, JPA, JavaFX, Swing, Vaadin
						</p>
					</div>
					<div>
						<img
							src="src/assets/images/tech-docker.svg"
							className="w-10 h-10 mb-2"
							alt="Docker Logo"
						/>
						<h3 className="mb-2 text-2xl font-bold">Docker</h3>
						<p className="font-light text-gray-500">
							Containerization of applications for modular and scalable deployments
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SkillsSection
