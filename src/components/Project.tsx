import { Button } from "@mui/material"

interface ProjectProps {
	name: string
	description: string
	image: string
	runProjectLink: string
	githubLink: string
}

const Project: React.FC<ProjectProps> = ({
	name,
	description,
	image,
	runProjectLink = "",
	githubLink
}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
			<img src={image} alt={name}></img>
			<Button href={runProjectLink}>Run Project</Button>
			<Button href={githubLink}>Github</Button>
		</div>
	)
}

export default Project
