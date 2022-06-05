import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificCard = () => {
	const { id } = useParams();
	const [char, setChar] = useState({});

	const charUrl = `https://rickandmortyapi.com/api/character/${id}`;

	useEffect(() => {
		fetch(charUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				setChar(data);
			});
	}, []);

	const styles = {
		maxWidth: "540px",
	};

	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "89vh" }}
		>
			<div
				className="card m-auto border-2 border-success rounded"
				style={styles}
			>
				<div className="row g-0">
					<div className="col-sm-6 bg-dark">
						<img
							src={char?.image}
							className="img-fluid rounded-start"
							alt={char?.name}
						/>
					</div>
					<div className="col-sm-6 bg-dark">
						<div className="card-body">
							<h5 className="card-title mb-4">{char?.name}</h5>
							<p className="card-text m-0">
								<b>ID</b>: {char?.id}
							</p>
							<p className="card-text m-0">
								<b>Status</b>: {char?.status}
							</p>
							<p className="card-text m-0">
								<b>Gender</b>: {char?.gender}
							</p>
							<p className="card-text m-0">
								<b>Species</b>: {char?.species}
							</p>
							<p className="card-text m-0">
								<b>Location</b>: {char?.location?.name}
							</p>
							<a
								href={`https://jsonformatter.org/?url=https://rickandmortyapi.com/api/character/${char?.id}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								Episodes and more info
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecificCard;
