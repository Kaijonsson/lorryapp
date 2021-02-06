import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Login from './Login';
import RegisterDropDown from './RegisterDropDown';

//Komponenten som syns högst upp. Knappen Login. trycks den på så aktiveras detta.

function DropDown() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)} className="bg-transparent buttonGroup"  id="reactButton" style={{
          margin: '0 auto',
          color: 'white',
          border: 'none',
          background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: '1px 6px 30px 9px rgba(0,0,0,0.30)',
          marginTop: 20,
        }}>
          Login

          {/* Trycker man på knappen Login så kommer Overlay upp och visar två nya komponenter */}

        </Button>
        <Overlay target={target.current} show={show} placement="bottom">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                padding: '2px 10px',
                color: 'black',
                borderRadius: '25px',
                zIndex: 2,
                ...props.style,
                
              }}
            >
              {/* Två andra komponenter som har separata dokument. */}
              <Login/>
              <RegisterDropDown/>
            </div>
          )}
        </Overlay>
      </>
    );
  
}

export default DropDown
