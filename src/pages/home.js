import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Label, Col, Input } from "reactstrap";

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
		if(card.number && card.name) {
			axios
			.post(`http://localhost:8000/api/card/`, { ...card })
			.then((res) => {
				alert('Added new Card');
				setName('');
			});
		}
		else {
			alert('Please type all fields');
		}
		
	};

	return (
		<div className="align-center">
			<h3>Collection Lists</h3>
			<table className="align-center">
				<thead>
					<tr>
						<th>Title</th>
						<th>Counts</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{collections.length > 0 &&
						collections.map((collection, idx) => (
							<tr key={collection.id}>
								<td>{collection.name}</td>
								<td>{collection.flashcard.length}</td>
								<td>
									<Button
										color="primary"
										onClick={() =>
											gotoDetail(collection.id, collection.flashcard)
										}
									>
										Collection Details
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
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
					<Button color="danger" onClick={handleSubmit} className="w-30 align-center" >Save</Button>
				</div>
			</form>
		</div>
	);
};

export default withRouter(Home);
