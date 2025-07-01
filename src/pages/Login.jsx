import React, { useState } from "react";
import '../styles/Login.css'
function Login() {
  const [user, setUser] = useState ({
    usernmae:'',
    password:''
  })
  const handleChangeUsernmae = (u)=>{
    setUser({...user, usernmae:u.target.value})
  }
  const handleChangePassword = (p)=>{
    setUser({...user, password:p.target.value})
  }
  return (
    <div className="body-login">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" onChange={handleChangeUsernmae} required id="usernmae" />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" onChange={handleChangePassword} required id="password" />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don’t Have An Account! <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
