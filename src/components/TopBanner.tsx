import { Paper } from "@mui/material"

interface TopBannerProps {
	text: string
	image: string
}

const TopBanner: React.FC<TopBannerProps> = ({ text, image }) => {
	return (
		<Paper elevation={5} style={{ margin: 5, padding: 5 }}>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
				<div style={{ width: "65%", fontWeight: "700", fontSize: "3em" }}>{text}</div>

				<div style={{ width: "35%" }}>
					<img src={image}></img>
				</div>
			</div>
		</Paper>
	)
}

export default TopBanner
