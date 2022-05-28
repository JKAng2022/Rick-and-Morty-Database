import React from "react";

const Filters = () => {
	return (
		<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center p-2 bd-highlight">
			<select
				className="form-select mx-4"
				aria-label="Status"
				style={{ width: "18rem" }}
			>
				<option selected>Filter by status</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">Unknown</option>
			</select>
			<select
				className="form-select mx-4"
				aria-label="Gender"
				style={{ width: "18rem" }}
			>
				<option selected>Filter by gender</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Unknown">Unknown</option>
			</select>
		</div>
	);
};

export default Filters;

{
	/* <select
					className="col form-select"
					aria-label="Default select example"
				>
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<select
					className="col form-select"
					aria-label="Default select example"
				>
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<select
					className="col form-select"
					aria-label="Default select example"
				>
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div> */
}
