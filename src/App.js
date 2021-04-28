import React from "react";
import Nav from "./components/Nav";
import CardComponent from "./components/CardComponent";
import DataTable from "./components/DataTable";
import { DataProvider } from "./context/DataContext";

const App = () => {
	return (
		<>
			<Nav />
			<DataProvider>
				<CardComponent />
				<DataTable />
			</DataProvider>
			
		</>
	);
};

export default App;
