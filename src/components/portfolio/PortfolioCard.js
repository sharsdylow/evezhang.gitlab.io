import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Style from "./PortfolioCard.module.scss"
import { Box } from "@mui/material";
import classNames from "classnames";

const iconClass = "fa fa-circle";

export default function PortfolioCard({project}) {
  const { image, live, source, title, intro } = project;
  let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  return (
	<Box component={'section'} className={classNames(Style.terminal, Style.shadowed)} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
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
					<Typography variant="body1">
						{intro}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	</Box>
  );
}
