import React, { ChangeEvent } from "react"
import { useState} from "react"
import InputWithLabel from "../components/InputWithLabel"
import { DropdownWithLabel } from "../components/DropdownWithLabel"
import { useDispatch } from "react-redux"
import { addEntry } from "../actionCreators/actions"
import { ThunkDispatch } from "redux-thunk"
import { FinanceState } from "../reducer/FinanceReducer"
import { AnyAction } from "redux"


const AddEntryForm  : React.FC  = () : JSX.Element =>{

    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number> (0)
    const [category, setCategory] = useState<string> ("Salary")
    const [entryType, setEntryType] = useState<string>("Income")

    type AppDispatch = ThunkDispatch<FinanceState, void, AnyAction>;
    const dispatch : AppDispatch = useDispatch()

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

    let optionsArrayToBePassed;
    if(entryType==="Income"){
      optionsArrayToBePassed =   [
            {label: "Salary", value: "Salary"}, 
            {label: "Business", value: "Business"},
            {label: "Services", value: "Services"},
            {label: "Random", value: "Random"},
            {label: "Others", value: "Others"}
        ]
    }
    else if (entryType ==="Expenses"){
        optionsArrayToBePassed =   [
            {label: "Select", value: "Select"},    
            {label: "Home", value: "Home"}, 
            {label: "Medical", value: "Medical"},
            {label: "Regular", value: "Regular"},
            {label: "Outing", value: "Outing"},
            {label: "Extra", value: "Extra"},
            {label: "Some Cost", value: "Some Cost"},
            {label: "Others", value: "Others"}]
    }
    else{
        optionsArrayToBePassed =  [
            {label: "Select", value: "Select"},    
            {label: "Savings", value: "Savings"}, 
            {label: "Investment", value: "Investment"},
            {label: "Random", value: "Random"},
            {label: "Others", value: "Others"}]
    }
   

    const entryTypeToBePassed = [
        {label: "Income", value: "Income"},
        {label: "Expenses", value: "Expenses"}, 
        {label: "Savings", value: "Savings"}
    ]


    const addIncome = () =>{
        const entryObj = {
            description: description,
            amount: amount,
            type: entryType,
            category: category
          };
          dispatch(addEntry(entryObj));
          setDescription("");
          setAmount(0);
          setEntryType("Income");
          setCategory("Select");
    }
    return(
        <div> 
            {
              <ul>
              <InputWithLabel label="Decription" type="text" value={description} onChange={handleDescriptionChange}/>
              <InputWithLabel label="Amount" type="number" value={amount} onChange={handleAmountChange}/>
              <DropdownWithLabel label="Entry Type" value={entryType} onChange={handleEntryTypeChange} options = {entryTypeToBePassed}/>
              <DropdownWithLabel label="Category"  value={category} onChange={handleCategoryChange} options={optionsArrayToBePassed}/>
              <button onClick={()=>{addIncome()}}>Add Income</button>
              </ul>
            }
        </div>
    )
}

export default AddEntryForm