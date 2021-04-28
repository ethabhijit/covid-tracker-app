import React, { useContext } from "react";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	makeStyles,
	Paper,
	Grid,
	Container
} from "@material-ui/core";
import { DataContext } from "../context/DataContext";

const useStyles = makeStyles(theme => ({
	table: {},
	table_container: {
		marginTop: theme.spacing(5)
	},
	table_header: {
		fontWeight: "bold"
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

const DataTable = () => {
	const [data, setData] = useContext(DataContext);
	const classes = useStyles();

	return (
		<>
			<Container className={classes.table_container}>
				<Grid container>
					<Grid item md={12}>
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell className={classes.table_header}>
											State
										</TableCell>
										<TableCell className={classes.table_header} align="right">
											Active
										</TableCell>
										<TableCell className={classes.table_header} align="right">
											Deaths
										</TableCell>
										<TableCell className={classes.table_header} align="right">
											Recovered
										</TableCell>
										<TableCell className={classes.table_header} align="right">
											Confirmed
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.state_wise && Object.keys(data.state_wise).map((keyName, index) => (
										<TableRow>
											<TableCell component="th" scope="row">
												{keyName}
											</TableCell>
											<TableCell align="right">
												{numberWithCommas(data.state_wise[keyName].active)}
											</TableCell>
											<TableCell align="right">
												{numberWithCommas(data.state_wise[keyName].deaths)}
											</TableCell>
											<TableCell align="right">
												{numberWithCommas(data.state_wise[keyName].recovered)}
											</TableCell>
											<TableCell align="right">
												{numberWithCommas(data.state_wise[keyName].confirmed)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default DataTable;
