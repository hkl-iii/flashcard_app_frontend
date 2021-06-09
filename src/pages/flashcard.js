import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from './card';

const Flashcard = props => {

  const [flashcards, setFlashcards] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/flashcard/").then((res) => {
			setFlashcards(res.data);
		});
	}, []);

  return (
    <>
    {
      flashcards.length > 0 && 
      flashcards.map((item, idx) => (
        <Card key={item.id} number={item.number} card_id={item.card}/>
      ))
    }
    </>
  )

}

export default Flashcard;