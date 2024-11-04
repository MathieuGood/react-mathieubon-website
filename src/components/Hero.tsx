import React from "react"
import Terminal from "./Terminal"
import LinkedInHeroButton from "./LinkedInHeroButton"
import GitHubHeroButton from "./GitHubHeroButton"
import heroData from "../data/heroData.json"

const Hero: React.FC = () => {
	return (
		<section className="page-hero bg-primary-2">
			<div className="bg-primary-2 grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-10">
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img
						src="src/assets/images/avatar.png"
						alt="Developer working on laptop"
						style={{ transform: "scaleX(-1)" }}
						className="lg:w-auto lg:h-auto"
					/>
				</div>
				<div className="mr-auto place-self-center lg:col-span-7">
					<div className="flex">
						<div className="lg:hidden w-25 mr-8">
							<img
								src="src/assets/images/avatar.png"
								alt="Developer working on laptop"
								style={{ transform: "scaleX(-1)" }}
								className="max-w-[150px] md:max-w-[230px]"
							/>
						</div>
						<div className="presentation-text">
							<h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
								{heroData[0].title}
							</h1>
							<p className="max-w-2xl mb-6 text-md font-light lg:mb-8 md:text-lg lg:text-xl">
								{heroData[0].subtitle}
							</p>
						</div>
					</div>
					<Terminal />
					<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
						<GitHubHeroButton href={heroData[0].githubLink} />
						<LinkedInHeroButton href={heroData[0].linkedinLink} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
