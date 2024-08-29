import React from "react"
import Button from "@mui/material/Button"
import { SxProps, Theme } from "@mui/material/styles"
import { customColors } from "../styles/customColors"

interface NavbarButtonProps {
	to: string
	children: React.ReactNode
	sx?: SxProps<Theme>
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ to, children, sx }) => {
	return (
		<Button
			color="inherit"
			component="a"
			href={to}
			sx={{
				fontFamily: "Fira Code, monospace",
				color: customColors.primaryYellow,
				...sx
			}}>
			{children}
		</Button>
	)
}

export default NavbarButton
