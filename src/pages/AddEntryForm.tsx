import React from "react"
import { useState} from "react"


export const AddEntryForm  : React.FC  = () : JSX.Element =>{

    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number> (0)
    const [category, setCategory] = useState<string> ("")

          
    return(
        <div> 
            {
              
            }
        </div>
    )
}