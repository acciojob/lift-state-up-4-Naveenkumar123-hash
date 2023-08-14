import React from "react";

const Button=(props)=>{
    const arrayprops=props.store;

    function removefn(value){
        props.handlingfn(value);
    }
    return(
        <>
            <ul>
            {
            arrayprops.map((item) => (
            <div className="child li">
            <li>{item}</li>
            <button onClick={()=>{
                removefn(item)
            }}>remove</button>
            </div>
        ))}
        </ul>
        </>
    )
}

export default Button;