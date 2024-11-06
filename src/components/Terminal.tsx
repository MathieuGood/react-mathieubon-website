import terminalContentData from "../data/terminalData.json"

const Terminal: React.FC = () => {
	const { commands, output } = terminalContentData[0]

	return (
		<div className="terminal mb-6 max-w-[650px] min-w-[200px] bg-[#2d2d2d] rounded-[5px] overflow-hidden text-[#c5c8c6] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
			<div className="terminal-header bg-[#e0e0e0] p-[10px] flex justify-start items-center">
				<div className=" w-3 h-3 bg-red-400 rounded-full mr-[8px]"></div>
				<div className=" w-3 h-3 bg-yellow-500 rounded-full mr-[8px]"></div>
				<div className=" w-3 h-3 bg-green-500 rounded-full mr-[8px]"></div>
			</div>
			<div className="terminal-body pt-3 pb-4 px-5 min-h-[150px] text-[10px]/4 xs:text-xs/5 lg:text-sm/7">
				<div className="commands text-green-500 mb-1">
					{commands.map((commandLine, index) => (
						<span key={index}>
							{commandLine}
							<br />
						</span>
					))}
				</div>

				<div className="output text-white">
					{output.map((outputLine, index) => (
						<span key={index}>
							{outputLine}
							<br />
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default Terminal

// import { useState } from "react"
// import terminalContentData from "../data/terminalData.json"
// import Typewriter from "typewriter-effect"

// const Terminal: React.FC = () => {
// 	const terminalOutput = terminalContentData[0].output
// 	const [isTerminalCommandsPrinted, setIsTerminalCommandsPrinted] = useState(false)

// 	return (
// 		<div className="terminal mb-6 max-w-[650px] min-w-[200px] bg-[#2d2d2d] rounded-[5px] overflow-hidden text-[#c5c8c6] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
// 			<div className="terminal-header bg-[#e0e0e0] p-[10px] flex justify-start items-center">
// 				<div className="w-3 h-3 bg-red-400 rounded-full mr-[8px]"></div>
// 				<div className="w-3 h-3 bg-yellow-500 rounded-full mr-[8px]"></div>
// 				<div className="w-3 h-3 bg-green-500 rounded-full mr-[8px]"></div>
// 			</div>
// 			<div className="terminal-body pt-3 pb-4 px-5 min-h-[116px] xs:min-h-[144px] lg:min-h-[200px] text-[10px]/4 xs:text-xs/5 lg:text-sm/7">
// 				<div className="commands text-green-500 mb-1">
// 					<Typewriter
// 						onInit={typewriter => {
// 							typewriter
// 								.pasteString("$ ", null)
// 								.pauseFor(800)
// 								.typeString("python3<br/>")
// 								.pauseFor(200)
// 								.pasteString(">>> ", null)
// 								.pauseFor(800)
// 								.typeString("from mathieubon import skills<br/>")
// 								.pauseFor(200)
// 								.pasteString(">>> ", null)
// 								.pauseFor(800)
// 								.typeString("print(skills.getSkills())")
// 								.pauseFor(200)
// 								.callFunction(() => {
// 									setIsTerminalCommandsPrinted(true)
// 								})
// 								.start()
// 						}}
// 						options={{ delay: 50, cursor: "" }}
// 					/>
// 				</div>

// 				<div className="output text-white ">
// 					{isTerminalCommandsPrinted && (
// 						<Typewriter
// 							onInit={typewriter => {
// 								typewriter
// 									.typeString(terminalOutput[0] + "<br />")
// 									.pauseFor(80)
// 									.typeString(terminalOutput[1] + "<br />")
// 									.pauseFor(80)
// 									.typeString(terminalOutput[2] + "<br />")
// 									.pauseFor(80)
// 									.typeString(terminalOutput[3] + "<span>")
// 									.start()
// 							}}
// 							options={{ delay: 10, cursor: "" }}
// 						/>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Terminal
