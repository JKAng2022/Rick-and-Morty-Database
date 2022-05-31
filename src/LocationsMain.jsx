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

	console.log("locationNames", locationNames);

	return (
		<Locations locationNames={locationNames} setPull={setPull} pull={pull} />
	);
};

export default LocationsMain;
