import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { Button, Label, Col, Input } from "reactstrap";


import Card from './card';

const Collection = props => {

  const cards = useState(props.location.state.data);
  const [flashcards, setFlashcards] = useState([])
  // console.log(props.match.params.id)

  useEffect(async () => {
    const temp= [];
    for (const card of cards[0]) {
      try {
        const res = await axios.get("http://localhost:8000/api/flashcard/" + card);
        temp.push(res.data)
      }
      catch(error) {
        console.log(error);
      }
      setFlashcards([...temp]);
    }
  },[])

  return (
    <div className="align-center">
      <h3>Flash Card Lists</h3>
      {
        flashcards.map((item,idx) => (
          <Card key={item.id} number={item.number} card_id={item.card} />
        ))
      }
      <form className="align-center w-60">
				<h4>Edit Card</h4>
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
						/>
					</Col>
				</div>
				<br />
				<div className="row">
					<Button color="danger" className="w-30 align-center" >Save</Button>
				</div>
			</form>
      <br />
      <Button color="primary" onClick={() => props.history.push('/')}>
        Go to Back
      </Button>
    </div>
  )

}

export default Collection;