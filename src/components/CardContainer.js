import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	box: {
		background: "red",
		height: 5,
		width: "100%",
	}
}));

const CardContainer = ({ title, caseNumber, color  }) => {
	const classes = useStyles();

	return (
		<>
			<Card>
				<CardContent>
					<Typography variant="subtitle2">{title}</Typography>
					<Typography variant="h6" style={{ color }}>
						{caseNumber}
					</Typography>
				</CardContent>
				<div className={classes.box} style={{ background: color}}>

				</div>
			</Card>
		</>
	);
};

export default CardContainer;
