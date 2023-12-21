import React, { useState } from "react";
import './Login.scss'
import axios from "axios";
import publicAxios from "../config/publicAxios";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const  [user,setUser] = useState({
      email:"",
      password:""
    });
    const navigate = useNavigate()
    const handleGetValue = (e)=>{
      setUser({...user,[e.target.name]:e.target.value});
    }
  const handeleLogin = async() =>{
    const res = await publicAxios.post('/login',user);
    localStorage.setItem('token',res.data.token);
    alert(res.data.messager);
    navigate('/todoList')

  }

  return (
    <div className="login-box">
    <p>Login</p>
    <div>
      <div className="user-box">
        <input   type="text" name="email" onChange={handleGetValue}/>
        <label>Email</label>
      </div>
      <div className="user-box">
        <input required="" name="password" type="text" onChange={handleGetValue} />
        <label>Password</label>
      </div>
      <button className="text-white" onClick={handeleLogin} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </div>
    <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
  </div>
  );
}
