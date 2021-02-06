import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Register from './Register';

function RegisterDropDown() {

    // Detta är bara en komponent som utför en viss funktion i appen. Nämligen en
    // dropdown för registreringen.

        const [show, setShow] = useState(false);
        const target = useRef(null);
        return (

          <>
            <Button ref={target} onClick={() => setShow(!show)} 
            className="bg-transparent buttonGroup"  
            style={{
              margin: '0 auto',
              color: 'white',
              border: '1px solid white',
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
