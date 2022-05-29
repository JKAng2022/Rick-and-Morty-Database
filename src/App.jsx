import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SpecificCard from "./SpecificCard";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/episodes" element={<Episodes />} /> */}
				{/* <Route path="/locations" element={<Location />} /> */}
				<Route path="/:id" element={<SpecificCard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
