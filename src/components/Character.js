import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Character = (props) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          borderRadius: "50px",
          justifyContent: "center",
          padding: "1em",
        }}
      >
        <Card.Img img src={props.character.image} alt="" />
        <Card.Body>
          <p>{props.character.name}</p>
          <Button variant="primary" onClick={props.onLearnMore}>
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Character;
