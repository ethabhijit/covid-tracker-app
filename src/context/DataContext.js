import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
			headers: {
				"x-rapidapi-key": "727bc25286msh5e1d7778bc63023p1e734cjsn8233a50866bd",
				"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
			}
		};

		axios
			.request(options)
			.then(function(response) {
        console.log(response.data);
        setData(response.data);
			})
			.catch(function(error) {
				console.error(error);
			});
	}, []);

	if(data) {
		return (
			<DataContext.Provider value={[data, setData]}>
				{children}
			</DataContext.Provider>
		);
	} else {
		console.log("error");
	}
};
