import React from "react"
import Terminal from "./Terminal"

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
							<h1 className="font-sans max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
								Hello, <br />
								my name is
								<br />
								Mathieu Bon.
							</h1>
							<p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
								Back-end developer. Passionate about the Python ecosystem.
							</p>
						</div>
					</div>
					<Terminal />
					<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
						<a
							href="https://github.com/MathieuGood"
							className="inline-flex items-center justify-center w-full px-5 py-3 text-xl font-medium text-center text-gray-900 border bg-white border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
							<img
								src="src/assets/images/github.svg"
								className="w-7 h-7 mr-2 text-gray-500"
								alt="GitHub Logo"
							/>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/mathieubon/"
							className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<img
								src="src/assets/images/linkedin.svg"
								className="w-6 h-6 mr-2"
								alt="LinkedIn Logo"
							/>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
