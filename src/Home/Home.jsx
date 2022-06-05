import React from "react";

const Home = () => {
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
					<cite title="Source Title">
						Rick (Season 3, Episode 2: Rickmancing the stone)
					</cite>
				</figcaption>
			</figure>
			<div className="d-flex justify-content-center mt-5">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9aUowoykENE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default Home;
