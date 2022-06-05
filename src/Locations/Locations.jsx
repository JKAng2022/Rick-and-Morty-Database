import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Locations = ({ locationNames }) => {
	const [locationID, setLocationID] = useState(1);
	const [locationName, setLocationName] = useState("");
	const [locationType, setLocationType] = useState("");
	const [locationDimension, setLocationDimension] = useState("");
	const [charLinkArr, setCharLinkArr] = useState([]);
	const [charArr, setCharArr] = useState([]);

	const api = `https://rickandmortyapi.com/api/location/${locationID}`;

	const changeLocation = (e) => setLocationID(e.target.value);

	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				setLocationName(data?.name);
				setLocationType(data?.type);
				setLocationDimension(data?.dimension);
				setCharLinkArr(data?.residents);
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
			<div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
				<select
					onChange={changeLocation}
					className="form-select mx-4 text-left bg-dark text-white"
					aria-label="changeEpisode"
					style={{ width: "15rem" }}
				>
					<option value="1" selected className="text-center">
						Choose Location
					</option>
					{locationNames.map((location, index) => (
						<option key={index} value={index + 1}>
							{index + 1} — {location}
						</option>
					))}
				</select>
			</div>
			<h3 className="text-center bg-dark">
				Name: {locationName} | Dimension: {locationDimension} | Type:{" "}
				{locationType}
			</h3>
			<Cards charArr={charArr} />
		</>
	);
};

export default Locations;
