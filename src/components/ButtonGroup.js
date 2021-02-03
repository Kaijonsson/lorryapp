import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Axios from "axios";
import "./Home.css";

function ButtonGroup() {
  const [breaksTable, setbreaksTable] = useState("");
  const [tiresTable, setTiresTable] = useState("");
  const [electricalTable, setElectricalTable] = useState("");
  const [WheelBearingTable, setWheelBearingTable] = useState("");
  const [HeadlightTable, setHeadlightTable] = useState("");
  const [AcTable, setAcTable] = useState("");

  /*------------------------------ GET VEHICLE-AREAS -------------------------------------------- */
      /*------------------------------ -------------------- -------------------------------------------- */



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
  }, []);
  /*------------------------------ GET VEHICLE-AREAS -------------------------------------------- */
      /*------------------------------ -------------------- -------------------------------------------- */


  /*------------------------------ GET DRIVER-SOLUTIONS -------------------------------------------- */
      /*------------------------------ -------------------- -------------------------------------------- */
  


    /*------------------------------ GET DRIVER-SOLUTIONS -------------------------------------------- */
    /*------------------------------ -------------------- -------------------------------------------- */


    /*------------------------------ -------------------- -------------------------------------------- */
    /*------------------------------ BUTTONS/OVERLAYS -------------------------------------------- */


  const [show, setShow] = useState(false);
  const [showCommonIssues, setShowCommonIssues] = useState(false);


  const target = useRef(null);
  const targetCommonIssues = useRef(null);

  const [problem, setProblem] = useState("");
  const commonIssues = [
    breaksTable,
    tiresTable,
    electricalTable,
    WheelBearingTable,
    HeadlightTable,
    AcTable,
  ];

  function renderButtonsGroup(buttonsToRender) {
    const myButtons = buttonsToRender.map((buttonToRender) => {
      return (
        <div key={buttonToRender.id}
        >
         <Button type="button"onClick={() => {
          setShow(!show)
          setProblem(buttonToRender)}}
          className="btn bg-transparent btn-secondary btn-lg buttonGroup"
          style={{
            color: "white",
            border: "none",
            background: "rgba(0, 0, 0, 0.5)",
            width: '100%',
          }}
        >
          {capitalize(buttonToRender.name)}
        </Button>
      </div>
      )
    })
    return myButtons

  }


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

      <div
        id="common-issues"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginTop: 20,
          marginBottom: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
  {/*------------------------------ KNAPPGRUPPEN -------------------------------------------- */}

        <div
          id="leftBox"
          ref={target}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 5,
          }}
        >
          <>

          {renderButtonsGroup(commonIssues)}

          </>

  {/*------------------------------ KNAPPGRUPPEN -------------------------------------------- */}


  {/*------------------------------ KNAPP 2, LISTA  -------------------------------------------- */}

          <Overlay target={target.current} show={show} placement="bottom">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  backgroundColor: "transparent",
                  padding: "2px 10px",
                  color: "black",
                  borderRadius: "25px",
                  zIndex: 1,
                  ...props.style,
                }}
              >
  {/*------------------------------ KNAPP FÖR LISTAN PÅ ÅTGÄRDER  -------------------------------------------- */}
         {/*-------------------------------------------------------------------------- */}
                <Button
                  type="button"
                  onClick={() => {
                    setShowCommonIssues(!showCommonIssues);
                  }}
                  ref={targetCommonIssues}
                  className="btn bg-transparent btn-secondary btn-lg buttonGroup"
                  style={{
                    color: "white",
                    border: "none",
                    background: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <p style={{
                  textDecoration: 'underline',
                }}>Common Issues</p>
                </Button>

  {/*------------------------------------------------------------------------------------------------------ */}
  {/*------------------------------ KNAPP FÖR LISTAN PÅ ÅTGÄRDER  -------------------------------------------- */}

              </div>
            )}
          </Overlay>
        </div>

  {/*------------------------------ LISTAN PÅ ÅTGÄRDER  -------------------------------------------- */}
  {/*------------------------------ ------------------ -------------------------------------------- */}

        <Overlay target={targetCommonIssues.current} show={showCommonIssues} placement="top">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: 0,
                textAlign: 'center',
                backgroundColor: 'grey',
                color: 'black',
                borderRadius: '5px',
                zIndex: 1,
                boxShadow: '1px 6px 30px 9px rgba(0,0,0,0.76)',
                ...props.style,

              }}
            >
              <ul style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'black',
                textAlign: 'center',
                padding: 5,
                background: "rgba(0, 0, 0, 0.5)",


              }}>
                <button type="button"
                className="buttonGroup"
                style={{
                  margin: '0 auto',
                  color: "white",
                  borderRadius: 5,
                  border: "none",
                  background: "rgba(0, 0, 0, 0.5)",
                  width: '50%',
                }}
                  onClick={() => {
                    setShowCommonIssues(!showCommonIssues);
                  }}>Back</button>
                <li><p>Most common: {capitalize(problem.common_issues)}</p></li>
                <li><p>Driver Solutions: {capitalize(problem.driver_solutions)}</p></li>
                <li><p>Workshop Solutions: {capitalize(problem.workshop_solutions)} </p></li>

              </ul> 
            </div>
          )}
        </Overlay>
  {/*------------------------------ ------------------ -------------------------------------------- */}
  {/*------------------------------ LISTAN PÅ ÅTGÄRDER  -------------------------------------------- */}
      </div>
    </>
  );
}


const capitalize = (s) => {
  //capitilizes first letter of a string
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default ButtonGroup;
