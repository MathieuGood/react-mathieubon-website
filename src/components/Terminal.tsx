import React from "react"

const Terminal: React.FC = () => {
	return (
		<div className="terminal mb-6">
			<div className="terminal-header">
				<div className="close"></div>
				<div className="minimize"></div>
				<div className="maximize"></div>
			</div>
			<div className="terminal-body">
				<div className="content text-xs lg:text-sm"></div>
			</div>
		</div>
	)
}

export default Terminal
