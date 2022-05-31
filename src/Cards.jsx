import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.scss";
import { useContext } from "react";
import { FavsContext } from "./App";

const Cards = ({ charArr }) => {
	const context = useContext(FavsContext);
	const navigate = useNavigate();

	const handleClick = (char) => {
		if (context.favsData.some((x) => x.id === char.id)) {
			context.setFavsData(context.favsData.filter((x) => x.id !== char.id));
		} else {
			context.setFavsData([...context.favsData, char]);
		}
	};

	if (charArr) {
		return (
			<div>
				<div className="d-flex flex-wrap justify-content-center">
					{charArr.map((char, index) => (
						<div
							className={`card mx-3 my-3 ${styles.zoom}`}
							key={index}
							style={{ width: "10rem" }}
						>
							<button
								onClick={() => handleClick(char)}
								type="button"
								className={
									context.favsData.some((x) => x.id === char.id)
										? "btn btn-danger p-0"
										: "btn btn-secondary p-0"
								}
							>
								{context.favsData.some((x) => x.id === char.id)
									? "Fav!"
									: "Add to Favs"}
							</button>
							<img
								src={char.image}
								key={char.index}
								className="card-img-top"
								alt={char.name}
							/>
							<div
								className="card-body bg-dark text-center"
								onClick={() => navigate(`/char/${char.id}`)}
								style={{ cursor: "pointer" }}
							>
								<h5 className="card-title">{char.name}</h5>
								<p className="card-text m-0">Status: {char.status}</p>
								<p className="card-text m-0">Gender: {char.gender}</p>
								<p className="card-text m-0">Species: {char.species}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<h1 className="text-center">
				<span className="bg-dark">No Available Characters</span>
			</h1>
		);
	}
};

export default Cards;

{
	/* <img key={index} src={char.image} alt={char.name} /> */
}
