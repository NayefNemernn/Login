import React from "react";
import Input from "./Input";

function Login (){
    return <>
    <h1 className="register-login">Welcome Back</h1>
    <form action="">
        <Input type ='text' placeholder ='Username'/>
        <Input type ='password' placeholder ='Password'/>
        <button type="submit">Login</button>
    </form>
    </>
}
export default Login;