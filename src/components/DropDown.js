import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Login from './Login';
import RegisterDropDown from './RegisterDropDown';


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
          marginTop: 20,
        }}>
          Login
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
              <Login/>
              <RegisterDropDown/>
            </div>
          )}
        </Overlay>
      </>
    );
  
}

export default DropDown
