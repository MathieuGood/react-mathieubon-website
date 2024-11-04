const GitHubHeroButton: React.FC<{ href: string }> = ({ href }) => (
	<a
		href={href}
		className="inline-flex items-center justify-center w-full px-5 py-3 text-xl font-medium text-center text-gray-900 border bg-white border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
		<img
			src="src/assets/images/github.svg"
			className="w-7 h-7 mr-2 text-gray-500"
			alt="GitHub logo"
		/>
		Github
	</a>
)

export default GitHubHeroButton
