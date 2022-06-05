import React from "react";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import Cards from "../Cards/Cards";
import Page from "./Page";

const Characters = () => {
	const [charArr, setCharArr] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState("");
	const [gender, setGender] = useState("");
	const [totalPages, setTotalPages] = useState(1);

	const api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}`;

	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				if (data?.results) {
					setCharArr(data?.results);
					setTotalPages(data?.info?.pages);
				} else {
					setCharArr(null);
					setTotalPages(1);
				}
			});
	}, [api]);

	return (
		<div>
			<h1 className="text-center mt-3">Characters</h1>
			<Searchbar setSearch={setSearch} setPageNum={setPageNum} />
			<Filters
				setStatus={setStatus}
				setGender={setGender}
				setPageNum={setPageNum}
			/>
			<Cards charArr={charArr} />
			<Page totalPages={totalPages} setPageNum={setPageNum} pageNum={pageNum} />
		</div>
	);
};

export default Characters;
