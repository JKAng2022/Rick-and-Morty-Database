import React from "react";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import Cards from "./Cards";

const Home = () => {
	const [charArr, setCharArr] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState("");
	const [gender, setGender] = useState("");

	const api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}`;

	useEffect(() => {
		fetch(api)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				setCharArr(data?.results);
			});
	}, [api]);

	return (
		<div>
			<figure className="text-center mt-3">
				<blockquote className="blockquote fs-5 mx-2">
					<h5>
						"To live is to risk it all; otherwise you’re just an inert chunk of
						randomly assembled molecules drifting wherever the universe blows
						you."
					</h5>
				</blockquote>
				<figcaption className="blockquote-footer fs-6 light text-white">
					<cite title="Source Title">Rick</cite>
				</figcaption>
			</figure>

			<Searchbar setSearch={setSearch} setPageNum={setPageNum} />
			<Filters
				setStatus={setStatus}
				setGender={setGender}
				setPageNum={setPageNum}
			/>
			<Cards charArr={charArr} />
		</div>
	);
};

export default Home;
