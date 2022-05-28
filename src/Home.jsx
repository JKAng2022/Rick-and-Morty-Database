import React from "react";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import Cards from "./Cards";

const Home = () => {
	const [status, setStatus] = useState("idle");
	const [charArr, setCharArr] = useState([]);

	useEffect(() => {
		setStatus("loading");
		fetch(`https://rickandmortyapi.com/api/character`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				setCharArr(data?.results);
				setStatus("done");
			})
			.catch((error) => {
				setStatus("error");
			});
	}, []);

	if (status === "loading") {
		return <h1 className="text-center">Loading</h1>;
	}

	if (status === "error") {
		return <h1 className="text-center">Mad Errors</h1>;
	}

	return (
		<div>
			<figure className="text-center mt-3">
				<blockquote className="blockquote fs-5">
					<p>
						"To live is to risk it all; otherwise you’re just an inert chunk of
						randomly assembled molecules drifting wherever the universe blows
						you."
					</p>
				</blockquote>
				<figcaption className="blockquote-footer fs-6 light text-white">
					<cite title="Source Title">Rick</cite>
				</figcaption>
			</figure>

			<Searchbar />
			<Filters />
			<Cards charArr={charArr} />
		</div>
	);
};

export default Home;
