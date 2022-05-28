import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
	const [status, setStatus] = useState("idle");
	const [char, setChar] = useState([]);

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
				setChar(data.results);
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
				<blockquote className="blockquote fs-4">
					<p>"To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."</p>
				</blockquote>
				<figcaption className="blockquote-footer fs-4 light text-white">
					<cite title="Source Title">Rick</cite>
				</figcaption>
			</figure>
			<img src={char[0]?.image} alt={char[0]?.name} />
		</div>
	);
};

export default Home;
