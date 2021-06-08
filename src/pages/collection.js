import React, { useState, useEffect } from "react";
import axios from "axios";

import Flashcard from './flashcard';

const Collection = props => {

  const { name, flashcard_id } = props;
  
  return (
    <div className="align-center">
      <h4>{name}</h4>
      <br />
    </div>
  )

}

export default Collection;