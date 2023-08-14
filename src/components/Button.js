import React from "react";

const Button=(props)=>{
    const arrayprops=props.store;

    function removefn(value){
        props.handlingfn(value);
    }
    return(
        <div>
            {
            arrayprops.map((item) => (
            <div className="child">
            <p>{item}</p>
            <button onClick={()=>{
                removefn(item)
            }}>remove</button>
            </div>
        ))}
        </div>
    )
}

export default Button;