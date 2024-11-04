import React from "react"

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
						<a
							href="https://github.com/MathieuGood"
							className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-sm font-medium text-center text-gray-900 border bg-white border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
							<img
								src="src/assets/images/github.svg"
								className="w-4 h-4 mr-2 text-gray-500"
								alt="GitHub Logo"
							/>
							GitHub
						</a>

						<a
							href="https://www.linkedin.com/in/mathieubon/"
							className="inline-flex items-center justify-center w-full px-5 py-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<img
								src="src/assets/images/linkedin.svg"
								className="w-4 h-4 mr-2"
								alt="LinkedIn Logo"
							/>
							LinkedIn
						</a>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
