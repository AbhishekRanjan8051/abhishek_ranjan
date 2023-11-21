import React from "react";
import { Card, Button } from "react-bootstrap";
import "./resuable.css";
import { useNavigate } from "react-router-dom";

function ResuableCompponents({ head, collage, state, doc }) {
  const navigate = useNavigate();

  return (
    <div>
      <Card className="eductiondata">
        <div className="eduction">
          <h3>{head}</h3>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ display: "flex" }}>
              <h4>{collage} </h4>({state})
            </span>
            <Button
              onClick={() => {
                navigate(doc);
              }}
            >
              Doc
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ResuableCompponents;
