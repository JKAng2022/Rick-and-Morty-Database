import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Episodes = () => {
	const [totalEpisodes, setTotalEpisodes] = useState(0);
	const [episodeID, setEpisodeID] = useState(1);
	const [episodeName, setEpisodeName] = useState("");
	const [episodeDate, setEpisodeDate] = useState("");
	const [seasonEpisode, setSeasonEpisode] = useState("");
	// charLinkArr is array of links to different characters. charArr is array of objects of characters.
	const [charLinkArr, setCharLinkArr] = useState([]);
	const [charArr, setCharArr] = useState([]);

	const totalEpisodesAPI = "https://rickandmortyapi.com/api/episode";

	useEffect(() => {
		fetch(totalEpisodesAPI)
			.then((response) => response.json())
			.then((data) => {
				setTotalEpisodes(data?.info?.count);
			});
	}, []);

	const episodesArr = [];

	for (let i = 1; i <= totalEpisodes; i++) {
		episodesArr.push(i);
	}

	const api = `https://rickandmortyapi.com/api/episode/${episodeID}`;

	const changeEpisode = (e) => setEpisodeID(e.target.value);

	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				setEpisodeName(data.name);
				setEpisodeDate(data.air_date);
				setSeasonEpisode(data.episode);
				setCharLinkArr(data.characters);
			});
	}, [api]);

	// Adapted from https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all from user Bergi
	useEffect(() => {
		const makeApiCall = async () => {
			const returnedArr = await Promise.all(
				charLinkArr.map(async (link) => {
					const res = await fetch(link);
					return await res.json();
				})
			);
			setCharArr(returnedArr);
		};
		makeApiCall();
	}, [charLinkArr]);

	return (
		<>
			<h1 className="text-center mt-3">Episodes</h1>
			<div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
				<select
					onChange={changeEpisode}
					className="form-select mx-4 text-center bg-dark text-white"
					aria-label="changeEpisode"
					style={{ width: "15rem" }}
				>
					<option value="1" selected>
						Choose Episode Number
					</option>
					{episodesArr.map((episode, index) => (
						<option key={index} value={episode}>
							Episode {episode}
						</option>
					))}
				</select>
			</div>
			<h3 className="text-center bg-dark">
				{episodeName} — {seasonEpisode} — {episodeDate}
			</h3>
			<Cards charArr={charArr} />
		</>
	);
};

export default Episodes;
