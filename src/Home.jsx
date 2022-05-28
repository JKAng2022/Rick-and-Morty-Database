import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
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
		return <h1>Loading</h1>;
	}

	if (status === "error") {
		return <h1>Mad Errors</h1>;
	}

	return (
		<div>
			<h1 className="text-center">Hello World</h1>
			<img src={char[0]?.image} alt={char[0]?.name} />
		</div>
	);
};

export default Home;
