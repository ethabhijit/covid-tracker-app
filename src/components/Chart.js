import { Line } from "react-chartjs-2";
import React, { useContext } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { DataContext } from "../context/DataContext";

const useStyles = makeStyles(theme => ({
	char_container: {
		margin: theme.spacing(5, 0, 5, 0)
	}
}));

const Chart = () => {
	const [data, setData] = useContext(DataContext);
	// data?.total_values?.active
	const classes = useStyles();

	let covidData = [0, 0, 0, 0];

	if (data) {
		covidData = [
			data?.total_values?.active,
			data?.total_values?.deaths,
			data?.total_values?.recovered,
			data?.total_values?.confirmed
		];
	}

	const lable = ["Active", "Deaths", "Recovered", "Confirmed"];

	const chartData = {
		labels: lable,
		datasets: [
			{
				label: "# of Votes",
				data: covidData,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)"
			}
		]
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};

	return (
		<Container className={classes.char_container}>
			<Grid container justify="center">
				<Grid item md={6} sm={8} xs={10}>
					<Line data={chartData} options={options} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Chart;
