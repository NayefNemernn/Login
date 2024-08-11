import React from "react";
import Input from "./Input";

function Register (){
    return <>
    <h1 className="register-login">Register Now</h1>
    <form action="">
        <Input type ='text' placeholder ='Username'/>
        <Input type ='password' placeholder ='Password'/>
        <Input type ='password' placeholder ='Confirm Password'/>
        <button type="submit">Register</button>
    </form>
    </>
}
export default Register;