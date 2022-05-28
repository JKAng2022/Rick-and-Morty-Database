import React from "react";

const Filters = () => {


	return (
		<div className="container mb-5">
			<div className="row">
				<select
					className="col form-select"
					aria-label="Status"
				>
					<option selected>Filter by status</option>
					<option value="Alive">Alive</option>
					<option value="Dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
				<select
					className="col form-select"
					aria-label="Gender"
				>
					<option selected>Filter by gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Unknown">Unknown</option>
				</select>
	
			</div>
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
