import React from 'react';
import { ChangeEvent } from "react";

interface InputWithLabelProps {
    label: string, 
    type: string, 
    value: number, 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const InputWithLabel : React.FC<InputWithLabelProps> = ({label, type, value, onChange}) => {

       return(
           <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange}/> 
           </div>
       )
}

export default InputWithLabel