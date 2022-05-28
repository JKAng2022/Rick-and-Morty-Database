import React, { useRef } from "react";

const Filters = ({ setStatus, setGender, setPageNum }) => {
	const statusSelect = useRef(null);
	const genderSelect = useRef(null);

	const changeStatus = (e) => {
		setPageNum(1);
		setStatus(e.target.value);
	};

	const changeGender = (e) => {
		setPageNum(1);
		setGender(e.target.value);
	};

	const handleClick = () => {
		setPageNum(1);
		setStatus("");
		setGender("");
		statusSelect.current.selectedIndex = 0;
		genderSelect.current.selectedIndex = 0;
	};

	return (
		<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center p-2 bd-highlight">
			<select
				onChange={changeStatus}
				ref={statusSelect}
				className="form-select mx-4"
				aria-label="Status"
				style={{ width: "18rem" }}
			>
				<option value="" selected>
					Filter by status
				</option>
				<option value="Alive">Status: Alive</option>
				<option value="Dead">Status: Dead</option>
				<option value="Unknown">Status: Unknown</option>
			</select>
			<select
				onChange={changeGender}
				ref={genderSelect}
				className="form-select mx-4"
				aria-label="Gender"
				style={{ width: "18rem" }}
			>
				<option value="" selected>
					Filter by gender
				</option>
				<option value="Male">Gender: Male</option>
				<option value="Female">Gender: Female</option>
				<option value="Unknown">Gender: Unknown</option>
			</select>
			<button
				type="button"
				onClick={handleClick}
				className="btn btn-dark my-4 mx-4 border-2 border-success rounded"
			>
				Reset Filters
			</button>
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
