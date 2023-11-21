import React, { useState } from "react";
import { Card, Alert, Container, Modal } from "react-bootstrap";
import Calculator from "../assests/img/calculator.png";
import FindImage from "../assests/img/findimage.png";

const Project = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {" "}
      <h1>Project List</h1>{" "}
      <div>
        <Card
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            width: "fit-content",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Card style={{ width: "fit-content", padding: "10px" }}>
            {" "}
            <img width="180" height="180" alt="test" src={Calculator} />{" "}
            <span>Calculator App</span>{" "}
            <a href="https://reactcalculatorsapp.netlify.app/"> Demo</a>{" "}
          </Card>{" "}
          <Card style={{ width: "fit-content", padding: "10px" }}>
            <img width="180" height="180" alt="test" src={FindImage} />{" "}
            <span>Calculator App</span>{" "}
            <a href="https://reactcalculatorsapp.netlify.app/"> Demo</a>{" "}
          </Card>
          <Card style={{ width: "fit-content", padding: "10px" }}>
            <img width="180" height="180" alt="test" src={FindImage} />{" "}
            <span>Calculator App</span>{" "}
            <a href="https://reactcalculatorsapp.netlify.app/"> Demo</a>{" "}
          </Card>
          <Card style={{ width: "fit-content", padding: "10px" }}>
            <img width="180" height="180" alt="test" src={FindImage} />{" "}
            <span>Calculator App</span>{" "}
            <a href="https://reactcalculatorsapp.netlify.app/"> Demo</a>{" "}
          </Card>{" "}
        </Card>{" "}
      </div>{" "}
      <Modal show={show}>
        <Container
          className="d-flex justify-content-center align-items-center"
          
        >
          <Alert variant="danger">
            <Alert.Heading>Website Under Maintenance</Alert.Heading>
            <p>
              We apologize for the inconvenience, but our website is currently
              undergoing maintenance. Please check back later.
            </p>
          </Alert>
        </Container>
      </Modal>
    </>
  );
};

export default Project;
