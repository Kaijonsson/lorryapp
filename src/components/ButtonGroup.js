import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import './Home.css';


function ButtonGroup() {


    const [breaksTable, setbreaksTable] = useState("");
    const [tiresTable, setTiresTable] = useState("");
    const [electricalTable, setElectricalTable] = useState("");
    const [WheelBearingTable, setWheelBearingTable] = useState("");
    const [HeadlightTable, setHeadlightTable] = useState("");
    const [AcTable, setAcTable] = useState("");
  
    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) => {
        console.log(response);
        setbreaksTable(response.data[0]);
        setTiresTable(response.data[1]);
        setElectricalTable(response.data[2]);
        setWheelBearingTable(response.data[3]);
        setHeadlightTable(response.data[4]);
        setAcTable(response.data[5]);
      });
  
      Axios.get("http://localhost:3001/api/get/driversolutions").then(
        (response) => {
          console.log(response);
        }
      );
    }, []);

    return (
      <>
        <h2
        style={{
          overflow: "hidden",
        }}
        id="secondTitle"
      >
        Common Issues
      </h2>

      <div id="common-issues">
        <div id="leftBox">
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(breaksTable.name)}
          </Button>
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(electricalTable.name)}
          </Button>
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(HeadlightTable.name)}
          </Button>
        </div>
        <div id="rightBox">
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(tiresTable.name)}
          </Button>
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(WheelBearingTable.name)}
          </Button>
          <Button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
          >
            {capitalize(AcTable.name)}
          </Button>
        </div>
      </div>
        </>
    )
}

//custom functions

const capitalize = (s) => {
    //capitilizes first letter of a string
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

export default ButtonGroup
