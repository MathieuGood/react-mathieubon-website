import React from "react"
import BulletPoint from "./BulletPoint"
import PrimaryColorButton from "./PrimaryColorButton"
import ProjectTechIcon from "./TechIcon"
import githubLogo from "/src/assets/images/github.svg"

const projectsData = [
	{
		title: "Jewels Juggle",
		description:
			"Personal rendition of the Bejeweled game. Built with React Native and ready to be compiled into a native iOS or Android application.",
		techStack: [
			{ src: "src/assets/images/tech-react.svg", alt: "React Native" },
			{ src: "src/assets/images/tech-node.svg", alt: "NodeJS" },
			{ src: "src/assets/images/tech-express.svg", alt: "Express" },
			{ src: "src/assets/images/tech-mariadb.svg", alt: "MariaDB" },
			{ src: "src/assets/images/tech-apple.svg", alt: "iOS Logo" },
			{ src: "src/assets/images/tech-android.svg", alt: "Android" }
		],
		features: [
			"User authentication",
			"Game logic and animations",
			"E-mail notifications with high-scores and player ranking."
		],
		githubLink: "https://github.com/MathieuGood/bejeweled_clone",
		videoSrc: "src/assets/videos/bejeweled_demo.mp4"
	},
	{
		title: "Temperature Logger",
		description:
			"Periodically logs temperature and humidity data from Switchbot sensors. Uses the official API to fetch information and writes it into a database.",
		techStack: [
			{ src: "src/assets/images/tech-python.svg", alt: "Python" },
			{ src: "src/assets/images/tech-sqlalchemy.svg", alt: "SQLAlchemy" },
			{ src: "src/assets/images/tech-postgres.svg", alt: "PostgreSQL" },
			{ src: "src/assets/images/tech-docker.svg", alt: "Docker" }
		],
		features: [
			"Model-based + ORM",
			"Config from .env file",
			"Containerized app for easy deployment"
		],
		githubLink: "https://github.com/MathieuGood/temperature_logger",
		videoSrc: "src/assets/videos/bejeweled_demo.mp4"
	}
]

const ProjectsSection: React.FC = () => {
	return (
		<section className="bg-gray-100">
			<div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 md:py-20 lg:space-y-20 lg:py-24 lg:px-16">
				<h2 className="text-4xl font-bold text-primary-1">Projects</h2>

				{projectsData.map((project, index) => (
					<div
						key={index}
						className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
						<>
							<div className="text-gray-500 sm:text-lg">
								<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
									{project.title}
								</h2>
								<p className="mb-8 font-light lg:text-xl">{project.description}</p>
								<div className="tech-stack flex">
									{project.techStack.map((tech, techIndex) => (
										<ProjectTechIcon key={techIndex} src={tech.src} alt={tech.alt} />
									))}
								</div>
								<ul
									role="list"
									className="pt-8 space-y-5 border-t border-gray-200 my-7">
									{project.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex space-x-3">
											<BulletPoint className="w-5 h-5 text-primary-1" />
											<span className="text-base font-medium leading-tight text-gray-900">
												{feature}
											</span>
										</li>
									))}
								</ul>
								<PrimaryColorButton href={project.githubLink}>
									<img
										src={githubLogo}
										className="w-4 h-4 mr-2 text-gray-500"
										alt="GitHub Logo"
									/>
									Open on GitHub
								</PrimaryColorButton>
							</div>
							<div className="flex justify-center items-center">
								<video
									autoPlay
									loop
									muted
									playsInline
									className="h-100 mb-4 rounded-lg lg:mb-0 lg:flex">
									<source src={project.videoSrc} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</>
					</div>
				))}
			</div>
		</section>
	)
}

export default ProjectsSection
