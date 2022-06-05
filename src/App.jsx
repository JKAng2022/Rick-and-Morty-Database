import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SpecificCard from "./SpecificCard/SpecificCard";
import Episodes from "./Episodes/Episodes";
import LocationsMain from "./Locations/LocationsMain";
import Characters from "./Characters/Characters";
import Favs from "./Favs/Favs";

export const FavsContext = createContext();

const App = () => {
	// favsData is an array of objects. Each object is an character.
	const [favsData, setFavsData] = useState(
		JSON.parse(localStorage.getItem("favsData")) || []
	);

	useEffect(() => {
		localStorage.setItem("favsData", JSON.stringify(favsData));
	}, [favsData]);

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
