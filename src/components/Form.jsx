import React from "react";
import Input from "./Input";

function Form (props){
    return <>
    <h1 className="register-login">Welcome Back</h1>
    <form action="">
        <Input type ='text' placeholder ='Username'/>
        <Input type ='password' placeholder ='Password'/>
        {!props.areUlogin && <Input type ='password' placeholder ='Confirm Password'/>}
        <button type="submit">{props.areUlogin ? 'Login' : 'Register'}</button>
    </form>
    </>
}
export default Form;