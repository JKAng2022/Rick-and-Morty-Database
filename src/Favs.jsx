import React, { useContext } from "react";
import { FavsContext } from "./App";
import Cards from "./Cards";

const Favs = () => {
	const context = useContext(FavsContext);

	return (
		<div>
			<h1 className="text-center mt-3">Favourites</h1>
			<Cards charArr={context.favsData} />
		</div>
	);
};

export default Favs;
