
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Button from "./Button";


const App = () => {
  let [store,setStore]=useState(
    [
      "Item 1 - $10",
      "Item 2 - $20",
      "Item 3 - $30"
    ])
  let [input1,setInput1]=useState('');
  let [input2,setInput2]=useState('');
  
  function clicked1(value){
     setInput1(value);
  }
  function clicked2(value){
     setInput2(value);
  }
  function Changefn(){
      if(input1&&input2!==''){
        setStore([...store,input1+" - "+'$'+input2]);
      }
    }
    function handlingfn(values){
       let ans=store.filter((item)=>{
            if(item!==values){
              return item
            }
      })
      setStore([...ans])
    }

  
  return (
    <div className="parent">
         <h1>Parent Component</h1>
         <label for="name">Item Name</label>
         <input type="text"name="name"onChange={()=>{
          clicked1(event.target.value)
         }}></input>
         <label for="quantity">Item Price</label>
         <input type="text"name="quantity"onChange={()=>{
          clicked2(event.target.value)}}></input>
         <button id="itemName"onClick={()=>{
           Changefn()
         }}>add item</button>
         <Button store={store} handlingfn={handlingfn}/>
    </div>
  )
}

export default App
