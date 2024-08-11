import React from "react";
import Input from "./Input";
import Btn from "./Btn";

function Form (props){
    return <>
    <h1 className="register-login">Welcome Back</h1>
    <form action="">
        <Input type ='text' placeholder ='Username'/>
        <Input type ='password' placeholder ='Password'/>
        {!props.areUlogin && <Input type ='password' placeholder ='Confirm Password'/>}
        <Btn />
    </form>
    </>
}
export default Form;