import React, { useContext } from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import CardContainer from "./CardContainer";
import { DataContext } from "../context/DataContext";

const useStyles = makeStyles(theme => ({
	card_container: {
		marginTop: theme.spacing(5)
	}
}));

// Format Number
const numberWithCommas = x => {
	if (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	} else {
		return 0;
	}
};

const CardComponent = () => {
	const classes = useStyles();
	const [data, setData] = useContext(DataContext);

	return (
		<>
			<Container className={classes.card_container}>
				<Grid container spacing={2}>
					<Grid item md={3} xs={12} sm={6}>
						<CardContainer
							title="Active"
							caseNumber={numberWithCommas(data?.total_values?.active)}
							color="#7b1fa2"
						/>
					</Grid>
					<Grid item md={3} xs={12} sm={6}>
						<CardContainer
							title="Deaths"
							caseNumber={numberWithCommas(data?.total_values?.deaths)}
							color="#d32f2f"
						/>
					</Grid>
					<Grid item md={3} xs={12} sm={6}>
						<CardContainer
							title="Recovered"
							caseNumber={numberWithCommas(data?.total_values?.recovered)}
							color="#388e3c"
						/>
					</Grid>
					<Grid item md={3} xs={12} sm={6}>
						<CardContainer
							title="Confirmed"
							caseNumber={numberWithCommas(data?.total_values?.confirmed)}
							color="#0288d1"
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default CardComponent;
