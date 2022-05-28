import React from "react";

const Searchbar = ({ setSearch, setPageNum }) => {
	const updateChar = (event) => {
		setPageNum(1);
		setSearch(event.target.value);
	};

	return (
		<div className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-3">
			<label
				htmlFor="search"
				className="col-sm-2 col-form-label text-center bg-dark border border-2 border-success rounded px-2"
			>
				Search for Character:
			</label>
			<div className="col-sm-4">
				<input
					onChange={updateChar}
					// value={search}
					type="text"
					className="form-control search"
					id="search"
				/>
			</div>
		</div>
	);
};

export default Searchbar;
