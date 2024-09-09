import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Style from "./PortfolioCard.module.scss"

export default function PortfolioCard({project}) {
  const { image, live, source, title, intro } = project;
  let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  return (
	<Card className={detectedDarkMode? Style.dark : Style.light}>
		<CardActionArea href={source}>
			<CardMedia
			component="img"
			height="200"
			image={image}
			alt="project img"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">
					{intro}
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
  );
}
