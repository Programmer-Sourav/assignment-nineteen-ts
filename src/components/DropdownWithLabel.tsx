
import React from "react";
import { ChangeEvent } from "react";

interface DropdownWithLabelProps {
    label: string, 
    value : string,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options: {label: string, value: string}[]
}

export const DropdownWithLabel : React.FC<DropdownWithLabelProps>= ({label, value, onChange, options}) =>{

    return(
        <div> 
          {
            <ul>
            <label>{label}</label>
            <select value={value} onChange={onChange}>
                {
                    options.map((optionValue, index)=>(
                        <option key = {index} value={optionValue.value}>{optionValue.label} </option>
                    ))
                }
            </select>
            </ul>
          }
        </div>
    )

}