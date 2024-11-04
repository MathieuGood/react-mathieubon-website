import terminalContentData from "../data/terminalContent.json"

const Terminal: React.FC = () => {
	const { commands, output } = terminalContentData[0]

	return (
		<div className="terminal mb-6 max-w-[650px] min-w-[200px] bg-[#2d2d2d] rounded-[5px] overflow-hidden text-[#c5c8c6] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
			<div className="terminal-header bg-[#e0e0e0] p-[10px] flex justify-start items-center">
				<div className=" w-3 h-3 bg-red-400 rounded-full mr-[8px]"></div>
				<div className=" w-3 h-3 bg-yellow-500 rounded-full mr-[8px]"></div>
				<div className=" w-3 h-3 bg-green-500 rounded-full mr-[8px]"></div>
			</div>
			<div className="terminal-body p-[20px] text-[16px] leading-[1.5] min-h-[220px]">
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
