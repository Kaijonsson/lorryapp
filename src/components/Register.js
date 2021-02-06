import React, {useState} from 'react'
import Axios from 'axios';

function Register() {

    // registreringsfunktionen kommer under här

    const [userNameReg, setUserNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {

        // Här postar axios önskad inloggningsinfo till backend via Node.js

        Axios.post("http://localhost:3001/register", {
          username: userNameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
      };

    return (
        
        
        <>

            <div className="registration"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>

                <input style={{
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid white',
                    borderRadius: 5,
                }}
                    type="text" autoComplete="off" placeholder="Username"
                    onChange={(e) => {
                    setUserNameReg(e.target.value) 
                    // önskat användarnamn
                    }}
                />
                <input style={{
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid white',
                    borderRadius: 5,
                }}
                    type="text" autoComplete="off" placeholder="Password"
                    onChange={(e) => {
                    setPasswordReg(e.target.value);
                    // önskat lösenord
                    }}
                />
             </div>

             <button
             className="buttonGroup"
             style={{
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid white',
                    borderRadius: 5,
                }}onClick={register}>Register</button>
                


        </>

    )
}

export default Register
