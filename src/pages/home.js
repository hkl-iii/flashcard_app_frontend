import React, { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./collection";

const Home = (props) => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/collection/").then((res) => {
			setCollections(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<div className="align-center">
			<h3>Collection Lists</h3>
			{collections.length > 0 &&
				collections.map((collection, idx) => (
					<>
						<Collection
							key={collection.id}
							name={collection.name}
							flashcard_id={collection.flashcard}
						/>
					</>
				))}
			{collections.length == 0 && <h1>No Collection Data</h1>}
		</div>
	);
};

export default Home;
