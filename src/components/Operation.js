import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Operation(prop) {

    //const addEquation = prop.onAddEquation
    const [value,setValue] = useState("");

    const dispatch = useDispatch()

    function clearInput() {
        setValue("")
    }

    function calculate() {
       const result = Function(`'use strict'; return (${value})`)()
       setValue(result)
       dispatch({type:"history/createEquation",payload:{res:result, equation:value}})
    }

    function updateNum(i) {
        const nextVal = value + String(i);
        setValue(nextVal)
    }

    function CreateButtons() {
        const buttons = [];
        for(let i = 0; i < 10; i++) {
            buttons.push(<li><button onClick={()=>updateNum(i)}>{i}</button></li>)
        }
        return buttons
    }



    return(<ul>
        <input value={value}/>
        <CreateButtons/>
        
        <li><button onClick={()=>updateNum('+')}>+</button></li>
        <li><button onClick={()=>updateNum('-')}>-</button></li>
        <li><button onClick={()=>updateNum('*')}>*</button></li>
        <li><button onClick={()=>updateNum('/')}>/</button></li>
        <li><button onClick={()=>calculate()}>=</button></li>
        <li><button onClick={()=>clearInput()}>Clear</button></li>
        </ul>)
}