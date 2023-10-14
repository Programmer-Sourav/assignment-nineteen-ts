import React, { ChangeEvent } from "react"
import { useState} from "react"
import InputWithLabel from "../components/InputWithLabel.tsx"
import { DropdownWithLabel } from "../components/DropdownWithLabel.tsx"


const AddEntryForm  : React.FC  = () : JSX.Element =>{

    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number> (0)
    const [category, setCategory] = useState<string> ("")
    const [entryType, setEntryType] = useState<string>("")

    const handleDescriptionChange = (e : ChangeEvent<HTMLInputElement>) =>{
      setDescription(e.target.value)
    }

    const handleAmountChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setAmount(parseFloat(e.target.value))
    }
         
    const handleCategoryChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setCategory(e.target.value)
    }

    const handleEntryTypeChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setEntryType(e.target.value)
    }

    const optionsArrayToBePassed = [
        {label: "Salary", value: "Salary"}, 
        {label: "Business", value: "Business"},
        {label: "Services", value: "Services"},
        {label: "Random", value: "Random"},
        {label: "Others", value: "Others"}
    ]

    const entryTypeToBePassed = [
        {label: "Income", value: "Income"},
        {label: "Expenses", value: "Expenses"}, 
        {label: "Savings", value: "Savings"}
    ]
    return(
        <div> 
            {
              <ul>
              <InputWithLabel label="Decription" type="text" value={description} onChange={handleDescriptionChange}/>
              <InputWithLabel label="Amount" type="number" value={amount} onChange={handleAmountChange}/>
              <DropdownWithLabel label="Category"  value={category} onChange={handleCategoryChange} options={optionsArrayToBePassed}/>
              <DropdownWithLabel label="Entry Type" value={entryType} onChange={handleEntryTypeChange} options = {entryTypeToBePassed}/>
              </ul>
            }
        </div>
    )
}

export default AddEntryForm