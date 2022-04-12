import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.clear} className="backdrop" />
      <Card className={"modal"}>
        <header className={"header"}>
          <h2>{props.title}</h2>
        </header>
        <div className={"content"}>
          <p>{props.message}</p>
        </div>

        <footer className={"action"}>
          <Button onClick={props.clear}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
