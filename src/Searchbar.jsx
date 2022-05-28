import React from "react";

const Searchbar = () => {
	return (
		<div className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4">
			<label htmlFor="search" className="col-sm-2 col-form-label text-center bg-dark border border-2 border-success rounded">
				Search for Character:
			</label>
			<div className="col-sm-4">
				<input type="text" className="form-control " id="search" />
			</div>
		</div>
	);
};

export default Searchbar;
