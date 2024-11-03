import terminalContentData from "../data/terminalContent.json"

const Terminal: React.FC = () => {
	const { commands, output } = terminalContentData[0]

	return (
		<div className="terminal mb-6">
			<div className="terminal-header">
				<div className="close"></div>
				<div className="minimize"></div>
				<div className="maximize"></div>
			</div>
			<div className="terminal-body">
				<div className="content text-xs lg:text-sm"></div>

				{commands.map((commandLine, index) => (
					<span key={index} className="text-green-500 text-xs lg:text-sm">
						{commandLine}
						<br />
					</span>
				))}

				{output.map((outputLine, index) => (
					<span key={index} className="text-white text-xs lg:text-sm">
						{outputLine}
						<br />
					</span>
				))}
			</div>
		</div>
	)
}

export default Terminal
