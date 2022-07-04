import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useState,useDispatch } from "react";
import { login } from "../Redux/AuthReducer/action";
const Login = () => {

  const navigate =useNavigate()
  const location=useLocation()
  const comingFrom =location?.state?.from?.pathname || "/";
  const dispatch =useDispatch()
  const [email,setemail]=useState("eve.holt@reqres.in")
  const [password,setpassword]=useState("cityslicka")
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(email && password){
    
      dispatch(login({email,password}))
      .then((r)=>{
        // console.log(r)
        if(r.type ==="LOGIN_SUCCESS"){
          navigate(comingFrom,{replace:true})
        }
      })
    }
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email"  type={"email"} placeholder={" enter your email"} value={email} 
      onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password"  type={"passward"} placeholder={" eneter your pass"} value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
