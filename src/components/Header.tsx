import React from "react"
import SocialMediaButton from "./SocialMediaButton"
import heroData from "../data/heroData.json"

const Header: React.FC = () => {
	return (
		<header className="fixed w-full">
			<nav className="bg-primary-2 border-gray-200 py-2.5">
				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
					<a href="#" className="flex items-center">
						<img
							src="src/assets/images/avatar.png"
							className="h-6 mr-3 sm:h-9"
							alt="Mathieu Bon avatar"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap">
							Mathieu Bon
						</span>
					</a>

					<div className="flex items-center lg:order-2">
						<SocialMediaButton
							href={heroData[0].githubLink}
							className="py-2 mr-2 text-sm"
							imageSize="4"
							imageSrc="src/assets/images/github.svg"
							imageAlt="GitHub logo"
							text="GitHub"
						/>
						<SocialMediaButton
							href={heroData[0].githubLink}
							className="py-2 mr-2 text-sm"
							imageSize="4"
							imageSrc="src/assets/images/linkedin.svg"
							imageAlt="LinkedIn logo"
							text="LinkedIn"
						/>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
