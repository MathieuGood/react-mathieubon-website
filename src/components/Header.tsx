import React from "react"
import SocialMediaButton from "./SocialMediaButton"
import pageData from "../data/pageData.json"

const Header: React.FC = () => {
	return (
		<header className="fixed w-full">
			<nav className="bg-primary-2 border-gray-200 py-2.5">
				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
					<a href="#" className="flex items-center">
						<img
							src="src/assets/images/avatar.png"
							className="h-10 mr-3"
							alt="Mathieu Bon avatar"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap">
							Mathieu Bon
						</span>
					</a>

					<div className="flex items-center">
						<SocialMediaButton
							href={pageData[0].githubLink}
							divClassName="px-2 py-2 xs:py-2 xs:px-5 mr-2 text-sm"
							imageSize="4"
							imageSrc="src/assets/images/github.svg"
							imageAlt="GitHub logo"
							text="GitHub"
							textClassName="hidden xm:block xm:ml-2"
						/>
						<SocialMediaButton
							href={pageData[0].linkedinLink}
							divClassName="px-2 py-2 xs:py-2 xs:px-5 mr-2 text-sm"
							imageSize="4"
							imageSrc="src/assets/images/linkedin.svg"
							imageAlt="LinkedIn logo"
							text="LinkedIn"
							textClassName="hidden xm:block xm:ml-2"
						/>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
