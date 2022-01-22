import "./Register.css";

// export default function Register() {
//     return (

//         <div className='Register'>
//              <span className="RegisterTitle">Register</span>

//             <form className='RegisterForm' action="">
//             <label>Username</label>
//                 <input type="text" className='RegisterInput' placeholder ="Enter your Username"/>

//                 <label>Email</label>
//                 <input type="text" className='RegisterInput' placeholder ="Enter your Email"/>
//                 <label>Password</label>
//                 <input type="password" className='RegisterInput' placeholder ="Enter your Password"/>

//             <button className='RegisterButton'>Register</button>

//             <br/>

//             <button className='RegisterButton'>Register</button>

//             </form>

//         </div>
//     )
// }

import React from "react";

export default function Register() {
  return (
    <div className="Register">
      <div className="Register-card">
        <div className="Register-heading">
          <span className="Register-welcome">
            Welcome to<strong> Post IT</strong>
          </span>
          <span>
            <p>Alredy have account?</p>
            <a href="/login">Login</a>
          </span>
        </div>
        <div className="Register-input">
          <h1>Register</h1>
          <form className="RegisterForm" action="">
            <label>Username</label>
            <input
              type="text"
              className="RegisterInput inputField"
              placeholder="Enter your Username"
            />
            <br/>
            <label> Email</label>
            <input
              className="inputField"
              type="email"
              placeholder="example@mail.com"
            />
            <br />
            <label> Password</label>
            <input type="password" placeholder="Password" />

          </form>
          <div className="Register-summit">
            <button type="summit"> Register </button>
          </div>
        </div>
      </div>
    </div>
  );
}
