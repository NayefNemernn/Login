import React from "react";

function Btn (props){
    return <button type="submit">{props.areUlogin ? 'Login' : 'Register'}</button>
}
export default Btn;