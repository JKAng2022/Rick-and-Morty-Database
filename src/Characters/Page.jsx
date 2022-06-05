import React, { useRef } from "react";

const Page = ({ totalPages, setPageNum, pageNum }) => {
	const pageSelect = useRef(null);

	const arr = [];

	for (let i = 1; i <= totalPages; i++) {
		arr.push(i);
	}

	const changePageNum = (e) => {
		setPageNum(e.target.value);
		pageSelect.current.selectedIndex = 0;
		window.scrollTo(0, 0);
	};

	return (
		<div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
			<select
				onChange={changePageNum}
				ref={pageSelect}
				className="form-select mx-4 text-center bg-dark text-white"
				aria-label="Status"
				style={{ width: "15rem" }}
			>
				<option value="1" selected>
					Choose Page Number
				</option>
				{arr.map((pgnum, index) => (
					<option key={index} value={pgnum}>
						Page {pgnum}
					</option>
				))}
			</select>
			<div className="text-center bg-dark border border-2 border-success rounded py-1 px-3">
				Current Page: {pageNum}
			</div>
		</div>
	);
};

export default Page;
