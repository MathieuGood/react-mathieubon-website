import { Paper, SxProps, Theme } from "@mui/material"

interface SectionProps {
	title: string
	children: React.ReactNode
	sx?: SxProps<Theme>
}

const Section: React.FC<SectionProps> = ({ title, children, sx }) => {
	return (
		<Paper elevation={5} sx={sx} style={{ margin: 5, padding: 5 }}>
			<div>
				<h1
					style={{
						fontFamily: "Fira Code",
						textTransform: "capitalize",
						textAlign: "center"
					}}>
					{title}
				</h1>
				{children}

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between"
					}}>
					<div style={{ width: "65%" }}></div>
					<div style={{ width: "35%" }}></div>
				</div>
			</div>
		</Paper>
	)
}

export default Section
