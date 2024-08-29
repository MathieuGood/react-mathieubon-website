import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import NavbarButton from "./NavbarButton"
import { Link } from "react-router-dom"
import { useMediaQuery } from "@mui/material"
import { customColors } from "../styles/customColors"

const Navbar: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const isMobile = useMediaQuery("(max-width:600px)")

	const handleDrawerOpen = () => {
		setDrawerOpen(true)
	}

	const handleDrawerClose = () => {
		setDrawerOpen(false)
	}

	return (
		<AppBar position="static">
			<Toolbar
				sx={{
					backgroundColor: customColors.primaryGrey,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
				{isMobile && (
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ color: customColors.primaryYellow }}
						onClick={handleDrawerOpen}>
						<MenuIcon />
					</IconButton>
				)}

				{!isMobile && (
					<div style={{ display: "flex", alignItems: "center" }}>
						<NavbarButton to="/">Home</NavbarButton>
						<NavbarButton to="/about">About me</NavbarButton>
						<NavbarButton to="/projects">Projects</NavbarButton>
						<NavbarButton to="/contact">Contact</NavbarButton>
					</div>
				)}

				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						textAlign: "right",
						fontFamily: "Fira Code",
						color: customColors.primaryYellow,
						textTransform: "uppercase"
					}}>
					Mathieu Bon
				</Typography>
			</Toolbar>

			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={handleDrawerClose}
				sx={{ "& .MuiDrawer-paper": { width: 240 }, fontFamily: "Fira Code" }}>
				<List>
					<ListItemButton component={Link} to="/" onClick={handleDrawerClose}>
						<ListItemText primary="Home" />
					</ListItemButton>
					<ListItemButton component={Link} to="/about" onClick={handleDrawerClose}>
						<ListItemText primary="About me" />
					</ListItemButton>
					<ListItemButton component={Link} to="/projects" onClick={handleDrawerClose}>
						<ListItemText primary="Projects" />
					</ListItemButton>
					<ListItemButton component={Link} to="/contact" onClick={handleDrawerClose}>
						<ListItemText primary="Contact" />
					</ListItemButton>
				</List>
			</Drawer>
		</AppBar>
	)
}

export default Navbar
