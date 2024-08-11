import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)
    function Increase (){
        setCount(count +1)
    }
    function Decrease(){
      setCount(count -1)
    }
    return <>
    <h1 className='count'>{count}</h1>
      <div className='btns'>
        <button className='btnCounter' onClick={Increase}>+</button>
        <button className='btnCounter' onClick={Decrease}>-</button>
      </div>
    </> 
}
export default Counter;