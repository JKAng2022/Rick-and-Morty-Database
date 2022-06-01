import React, { useContext } from "react";
import { FavsContext } from "./App";
import Cards from "./Cards";

const Favs = () => {
	const context = useContext(FavsContext);

	return (
		<div>
			<h1 className="text-center mt-3">Favourites</h1>
			<div className="d-flex justify-content-center">
				<button
					type="button"
					onClick={() => context.setFavsData([])}
					className="btn btn-dark my-0 mx-4 border-2 border-success rounded"
				>
					Reset Favs
				</button>
			</div>
			<Cards charArr={context.favsData} />
		</div>
	);
};

export default Favs;
