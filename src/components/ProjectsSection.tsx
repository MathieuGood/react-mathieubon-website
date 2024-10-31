import React from "react"

const ProjectsSection: React.FC = () => {
	return (
		<section className="bg-gray-100">
			<div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 md:py-20 lg:space-y-20 lg:py-24 lg:px-16">
				<h2 className="text-4xl font-bold text-primary-1">Projects</h2>
				<div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
					<div className="text-gray-500 sm:text-lg">
						<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
							Jewels Juggle
						</h2>
						<p className="mb-8 font-light lg:text-xl">
							Personal rendition of the Bejeweled game. Built with React Native and
							ready to be compiled into a native iOS or Android application.
						</p>
						<div className="tech-stack flex">
							<img
								src="src/assets/images/tech-react.svg"
								className="w-8 h-8 mx-2"
								alt="React Native"
							/>
							<img
								src="src/assets/images/tech-node.svg"
								className="w-auto max-h-8 mx-2"
								alt="NodeJS"
							/>
							<img
								src="src/assets/images/tech-express.svg"
								className="w-auto max-h-8 mx-2"
								alt="Express"
							/>
							<img
								src="src/assets/images/tech-mariadb.svg"
								className="w-auto max-h-8 mx-2"
								alt="MariaDB"
							/>
							<img
								src="src/assets/images/tech-apple.svg"
								className="w-auto max-h-8 mx-2"
								alt="iOS Logo"
							/>
							<img
								src="src/assets/images/tech-android.svg"
								className="w-auto max-h-8 mx-2"
								alt="Android"
							/>
						</div>
						<ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									User authentication
								</span>
							</li>
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									Game logic and animations
								</span>
							</li>
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									E-mail notifications with high-scores and player ranking.
								</span>
							</li>
						</ul>
						<a
							href="https://github.com/MathieuGood/bejeweled_clone"
							className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
							<img
								src="images/github.svg"
								className="w-4 h-4 mr-2 text-gray-500"
								alt="GitHub Logo"
							/>
							Open on GitHub
						</a>
					</div>
					<div className="flex justify-center items-center">
						<video
							autoPlay
							loop
							muted
							playsInline
							className="h-100 mb-4 rounded-lg lg:mb-0 lg:flex">
							<source src="src/assets/videos/bejeweled_demo.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
				<div className="separator w-full pb-0 mb-0 flex justify-start xl:justify-center">
					<span className="text-gray-300 text-xl">
						◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌
					</span>
				</div>
				<div className="items-center mt-0 pt-0 gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
					<img
						className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
						src="videos/temperature_logger_gif.gif"
						alt="Temperature logger"
					/>
					<div className="text-gray-500 sm:text-lg">
						<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
							Temperature Logger
						</h2>
						<p className="mb-8 font-light lg:text-xl">
							Periodically logs temperature and humidity data from Switchbot sensors.
							Uses the official API to fetch information and writes it into a
							database.
						</p>
						<div className="tech-stack flex">
							<img
								src="src/assets/images/tech-python.svg"
								className="w-8 h-8 mx-2"
								alt="Python"
							/>
							<img
								src="src/assets/images/tech-sqlalchemy.svg"
								className="w-auto max-h-8 mx-2"
								alt="SQLAlchemy"
							/>
							<img
								src="src/assets/images/tech-postgres.svg"
								className="w-auto max-h-8 mx-2"
								alt="PostgreSQL"
							/>
							<img
								src="src/assets/images/tech-docker.svg"
								className="w-auto max-h-8 mx-2"
								alt="Docker"
							/>
						</div>
						<ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									Model-based + ORM
								</span>
							</li>
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									Config from .env file
								</span>
							</li>
							<li className="flex space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-primary-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium leading-tight text-gray-900">
									Containerized app for easy deployment
								</span>
							</li>
						</ul>
						<a
							href="https://github.com/MathieuGood/temperature_logger"
							className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-m font-medium text-center text-gray-900 border bg-primary-2 border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
							<img
								src="src/assets/images/github.svg"
								className="w-4 h-4 mr-2 text-gray-500"
								alt="GitHub Logo"
							/>
							Open on GitHub
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
