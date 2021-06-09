import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "reactstrap"
import classnames from "classnames";

const Card = props => {

  const { card_id, number } = props;
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/card/" + card_id).then((res) => {
      setName(res.data.name);
		});
  },[])

  return (
    <div className={classnames({"align-center" : true, "bg-active" : active})} onClick={()=>setActive(!active)}>
      <Row>
        <Col lg={4} className="f-bold">
          Number
        </Col>
        <Col lg={6} className="f-bold">
          Name
        </Col>
        <Col lg={2}>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          {number}
        </Col>
        <Col lg={6}>
          {name}
        </Col>
        <Col lg={2}>
          <Button color="warning" onClick={() => props.onClick(card_id, name)}>
            Edit
          </Button>
        </Col>
      </Row>
      <br />
    </div>
  )
}

export default Card;