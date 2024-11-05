import React from "react"
import Terminal from "./Terminal"
import SocialMediaButton from "./SocialMediaButton"
import pageData from "../data/pageData.json"

const Hero: React.FC = () => {
	return (
		<section className="page-hero bg-primary-2">
			<div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-10">
				<div className="hero-avatar1 hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img
						src="/images/avatar.png"
						alt="Developer working on laptop"
						className="lg:w-auto lg:h-auto object-contain"
					/>
				</div>

				<div className="mr-auto place-self-center lg:col-span-7">
					<div className="flex flex-col xs:flex-row">
						<div className="hero-avatar2 -mt-3 mb-2 xs:mb-0 lg:hidden w-25 mr-8">
							<img
								src="/images/avatar.png"
								alt="Developer working on laptop"
								className="max-w-[150px] md:max-w-[230px]"
							/>
						</div>
						<div className="presentation-text">
							<h1 className="hero-title max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
								{pageData[0].heroTitle}
							</h1>
							<p className="hero-subtitle max-w-2xl mb-6 text-md font-light lg:mb-8 md:text-lg lg:text-xl">
								{pageData[0].heroSubtitle}
							</p>
						</div>
					</div>

					<Terminal />

					<div className="hero-buttons flex space-y-0 space-x-4">
						<SocialMediaButton
							href={pageData[0].githubLink}
							divClassName="py-3 text-xl"
							imageSize="6"
							imageSrc="/images/github.svg"
							imageAlt="GitHub logo"
							text="GitHub"
							textClassName="ml-2"
						/>
						<SocialMediaButton
							href={pageData[0].linkedinLink}
							divClassName="py-3 text-xl"
							imageSize="6"
							imageSrc="/images/linkedin.svg"
							imageAlt="LinkedIn logo"
							text="LinkedIn"
							textClassName="ml-2"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
