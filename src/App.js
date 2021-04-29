import React from "react";
import Nav from "./components/Nav";
import CardComponent from "./components/CardComponent";
import DataTable from "./components/DataTable";
import { DataProvider } from "./context/DataContext";
import Chart from "./components/Chart";

const App = () => {
	return (
		<>
			<Nav />
			<DataProvider>
				<CardComponent />
				<Chart />
				<DataTable />
			</DataProvider>
			
		</>
	);
};

export default App;
