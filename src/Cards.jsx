import React from "react";

const Cards = ({ charArr }) => {
	return (
		<div>
			<div className="d-flex flex-wrap justify-content-center">
				{charArr.map((char, index) => (
					<div
						className="card mx-3 my-3"
						key={index}
						style={{ width: "10rem" }}
					>
						<img
							src={char.image}
							key={char.index}
							className="card-img-top"
							alt={char.name}
						/>
						<div className="card-body bg-dark text-center">
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
};

export default Cards;

{
	/* <img key={index} src={char.image} alt={char.name} /> */
}
