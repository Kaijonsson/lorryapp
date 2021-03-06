import React, { useState } from 'react'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

function Login() {

  
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginstatus, setLoginStatus] = useState("");
  

    //funktion som skickar inloggningsinfon till backend via node.js
    const login = () => {
      
      Axios.post("http://localhost:3001/login", {
        username: userName,
        password: password,
      }).then((response) => {
        console.log(response.data);

        if(response.data.message) {
          setLoginStatus(response.data.message)
        }else {
          setLoginStatus( 'Welcome ' + response.data[0].username);
        }
      });
    };
  
    return (
        <div className="App" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}>

          <div className="login"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',

                    }}>

            <input style={{

              color: 'white',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 5,
              border: '1px solid white',


            }} type="text" placeholder="Username" autoComplete="off"
              onChange={(e) => {
                setUserName(e.target.value)
              }}/>
            <input style={{

              color: 'white',
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid white',
              borderRadius: 5,

            }} type="password" placeholder="Password" autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value)
              }} />

          </div>
              {/* inloggningsknappen */}
          <button className="buttonGroup"
          style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid white',
              borderRadius: 5,
              
            }} onClick={login}>Login
          </button>

          <p style={{
                color: 'white',
                overflow: 'hidden',
            }}>{capitalize(loginstatus)}</p> 
            {/* här skriver programmet ut svar på inloggningsförsöket */}

          </div>


  
    );


  }

      //custom functions

const capitalize = (s) => {
  //capitilizes first letter of a string
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default Login
