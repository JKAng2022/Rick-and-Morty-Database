import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SpecificCard from "./SpecificCard";
import Episodes from "./Episodes";
import LocationsMain from "./LocationsMain";
import Characters from "./Characters";
import Favs from "./Favs";

export const FavsContext = createContext();

const App = () => {
	const [favsData, setFavsData] = useState([]);

	// useEffect(() => {
	// 	const items = JSON.parse(localStorage.getItem("favsData"));
	// 	if (items) {
	// 		setFavsData(items);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem("favsData", JSON.stringify(favsData));
	// 	console.log(JSON.parse(localStorage.getItem("favsData")));
	// }, [favsData]);

	return (
		<FavsContext.Provider value={{ favsData, setFavsData }}>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/episodes" element={<Episodes />} />
					<Route path="/locations" element={<LocationsMain />} />
					<Route path="/char/:id" element={<SpecificCard />} />
					<Route path="/favs" element={<Favs />} />
				</Routes>
			</BrowserRouter>
		</FavsContext.Provider>
	);
};

export default App;
