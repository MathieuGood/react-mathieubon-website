const LinkedInHeroButton: React.FC<{ href: string }> = ({ href }) => (
	<a
		href={href}
        className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
		<img
			src="src/assets/images/linkedin.svg"
			className="w-6 h-6 mr-2 text-gray-500"
			alt="LinkedIn logo"
		/>
		LinkedIn
	</a>
)

export default LinkedInHeroButton
