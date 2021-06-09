import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap"


const Card = props => {

  const { card_id, number } = props;
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/card/" + card_id).then((res) => {
      setName(res.data.name);
		});
  },[])

  return (
    <div className="aligh-center">
      <Row>
        <Col lg={4} className="f-bold">
          Number
        </Col>
        <Col lg={8} className="f-bold">
          Name
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          {number}
        </Col>
        <Col lg={8}>
          {name}
        </Col>
      </Row>
      <br />
    </div>
  )
}

export default Card;