import "./Login.css";

// export default function Login() {
//     return (
//         <div className='login'>
//              <span className="loginTitle">Login</span>
//             <form className='loginForm' action="">

//                 <label>Email</label>
//                 <input type="text" className='loginInput' placeholder ="Enter your Email"/>
//                 <label>Password</label>
//                 <input type="password" className='loginInput' placeholder ="Enter your Password"/>
//             <button className='loginButton'>Login</button>
//             <br/>
//             <button className='loginRegisterButton'>Register</button>
//             </form>
//         </div>
//     )
// }

import React from "react";

export default function Login() {
  return (
    <div className="Login">
      <div className="Login-card">
        <div className="Login-heading">
          <span className="Login-welcome">
            Welcome to<strong> Sasta Medium </strong>
          </span>
          <span>
            <p>No Account ?</p>
            <a href="/register">Signup</a>
          </span>
         
        </div>
        <div className="Login-input">
          <h1>Sign in</h1>
          <form className='loginForm' action="">
            <label> Email</label>
            <input className="inputField" type="email" placeholder="example@mail.com" />
            <br />
            <label> Password</label>
            <input type="password" placeholder="Password" />
          </form>
         
          <div className="Login-summit">
        
         
            <button type="summit" > Sign in</button>
          </div>

        </div>
      </div>
    </div>
  );
}