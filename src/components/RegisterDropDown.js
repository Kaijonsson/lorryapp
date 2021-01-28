import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Register from './Register';

function RegisterDropDown() {

        const [show, setShow] = useState(false);
        const target = useRef(null);
        return (

          <>
            <Button ref={target} onClick={() => setShow(!show)} className="bg-transparent"  id="reactButton" style={{
              width: '80%',
              margin: '0 auto',
              color: 'white',
              border: 'none',
            }}>
              Register
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
                    
                  }}>
                      <Register/>
                </div>
              )}
            </Overlay>
          </>
        );
}

export default RegisterDropDown
