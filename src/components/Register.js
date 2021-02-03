import React, {useState} from 'react'
import Axios from 'axios';

function Register() {

    const [userNameReg, setUserNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
      
        Axios.post("http://localhost:3001/register", {
          username: userNameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
      };

    return (
        
        
        <>

            <div className="registration">

                <input style={{
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #6c757d',
                    borderRadius: 5,
                }}
                    type="text" autoComplete="off" placeholder="Username"
                    onChange={(e) => {
                    setUserNameReg(e.target.value)
                    }}
                />
                <input style={{
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #6c757d',
                    borderRadius: 5,
                }}
                    type="text" autoComplete="off" placeholder="Password"
                    onChange={(e) => {
                    setPasswordReg(e.target.value);
                    }}
                />
             </div>

             <button
             style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #6c757d',
                    borderRadius: 5,
                }}onClick={register}>Register</button>


        </>

    )
}

export default Register
