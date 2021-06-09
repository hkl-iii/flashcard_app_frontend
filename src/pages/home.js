import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Label, Col, Input } from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';

const Home = (props) => {
	const [collections, setCollections] = useState([]);
	const [name, setName] = useState("");

	useEffect(() => {
		axios.get("http://localhost:8000/api/collection/").then((res) => {
			setCollections(res.data);
		});
	}, []);

	const gotoDetail = (id, flashcard) => {
		props.history.push("/collection/" + id, { data: flashcard });
	};

	const handleSubmit = () => {
		const card = {
			name: name,
		};
		if (card.name) {
			axios.post(`http://localhost:8000/api/card/`, { ...card }).then((res) => {
				alert("Added new Card");
				setName("");
			});
		} else {
			alert("Please type all fields");
		}
	};

	const columns = [
		{
			dataField: "id",
			text: "Collection ID",
		},
		{
			dataField: "name",
			text: "Collection Name",
		},
		{
			dataField: "Counts",
			text: "Collection Counts",
			formatter : (cellContent, row) => (
				<span>{row.flashcard.length}</span>
			)
		},
		{
			dataField: "",
			text: "Actions",
			formatter : (cellContent, row) => (
				<Button
					color="primary"
					onClick={() =>
						gotoDetail(row.id, row.flashcard)
					}
				>
					Collection Details
				</Button>
			)
		},
	];

	const selectRow = {
		mode: "checkbox",
		clickToSelect: true,
		style: { backgroundColor: '#c8e6c9' }
	};

	return (
		<div className="align-center">
			<br />
			<h3>Collection Lists</h3>
			<BootstrapTable
				bootstrap4
				keyField="id"
				data={collections}
				columns={columns}
				selectRow={selectRow}
			/>
			{collections.length == 0 && <h1>No Collection Data</h1>}
			<br />
			<hr />
			<form className="align-center w-60">
				<h4>Add New Card</h4>
				<div className="row">
					<Label htmlFor="card_name" className="col-sm-4 col-form-Label">
						Card name
					</Label>
					<Col sm={8}>
						<Input
							type="text"
							className="form-control"
							id="card_name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Col>
				</div>
				<br />
				<div className="row">
					<Button
						color="danger"
						onClick={handleSubmit}
						className="w-30 align-center"
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};

export default withRouter(Home);
