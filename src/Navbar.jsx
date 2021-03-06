import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<img
					src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
					alt=""
					width="25"
					height="25"
					className="d-inline-block align-text-top rounded"
					style={{ marginRight: "10px" }}
				/>
				<Link to="/" className="navbar-brand">
					Rick & Morty Database
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-3">
						{/* Navlink allows current link to be highlighted */}
						<li className="nav-item">
							<NavLink
								to="/characters"
								className="nav-link"
								aria-current="page"
							>
								Characters
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/episodes" className="nav-link" aria-current="page">
								Episodes
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/locations" className="nav-link" aria-current="page">
								Locations
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/favs" className="nav-link" aria-current="page">
								Favourites
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
