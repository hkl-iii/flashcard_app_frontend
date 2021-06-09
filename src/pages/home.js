import React, { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./collection";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";

const Home = (props) => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/collection/").then((res) => {
			setCollections(res.data);
		});
	}, []);

	const gotoDetail = (id, flashcard) => {
		props.history.push("/collection/" + id, {data : flashcard});
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
										onClick={() => gotoDetail(collection.id, collection.flashcard)}
									>
										Collection Details
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			{collections.length == 0 && <h1>No Collection Data</h1>}
		</div>
	);
};

export default withRouter(Home);
