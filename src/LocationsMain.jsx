import React, { useEffect, useState } from "react";
import Locations from "./Locations";

const LocationsMain = () => {
	const [totalLocations, setTotalLocations] = useState(0);
	const [locationNames, setLocationNames] = useState([]);
	const [pull, setPull] = useState(true);

	const totalEpisodesAPI = "https://rickandmortyapi.com/api/location";

	useEffect(() => {
		fetch(totalEpisodesAPI)
			.then((response) => response.json())
			.then((data) => {
				setTotalLocations(data?.info?.count);
				setPull(!pull);
			});
	}, []);

	const locationsArr = [];

	for (let i = 1; i <= totalLocations; i++) {
		locationsArr.push(`https://rickandmortyapi.com/api/location/${i}`);
	}

	useEffect(() => {
		const makeApiCall = async () => {
			const returnedArr = await Promise.all(
				locationsArr.map(async (location) => {
					const res = await fetch(location);
					const data = await res.json();
					return data;
				})
			);
			setLocationNames(returnedArr.map((item) => item.name));
		};
		makeApiCall();
	}, [pull]);

	const handleClick = () => setPull(!pull);

	return (
		<>
			<h1 className="text-center mt-3">Locations</h1>
			<div className="d-flex justify-content-center mb-2">
				<button
					onClick={handleClick}
					className="text-center text-white bg-dark border border-2 border-success rounded py-1 px-3"
				>
					Update
				</button>
			</div>
			<Locations locationNames={locationNames} />
		</>
	);
};

export default LocationsMain;
