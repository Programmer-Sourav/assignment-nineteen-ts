import React, { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState, Savings} from "../reducer/FinanceReducer"
import { getSavingsList, sortSavingsData } from "../actionCreators/actions"
import { DropdownWithLabel } from "../components/DropdownWithLabel"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"


const SavingsPage : React.FC  = () : JSX.Element =>{
  
    
   const [checked, setChecked] = useState<boolean>(false)
   const [categories, setCategories] = useState<string> ("")

   type AppDispatch = ThunkDispatch<FinanceState, void, AnyAction>;

   const dispatch : AppDispatch = useDispatch()
   const savingsList = useSelector((state: FinanceState)=>state.savingsList)

   useEffect(() => {
    // Dispatch the action creator without issues
    dispatch(getSavingsList());
  }, []);

    
   const onCheckedChanged = () =>{
    setChecked(checked=>!checked)
    if(!checked)
    dispatch(sortSavingsData())
  }

  const categoriesToBePassed =    [
  {label: "Select", value: "Select"},    
  {label: "Savings", value: "Savings"}, 
  {label: "Investment", value: "Investment"},
  {label: "Random", value: "Random"},
  {label: "Others", value: "Others"}]

  const handleCategoriesChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
      setCategories(e.target.value)
  }


  let filteredList = savingsList

 if(categories!=="Select"){
  filteredList = savingsList.filter((savings)=>(savings.category.includes(categories)))
 }

    return(
        <div>
             <label>Sort Data 
            <input type="checkbox" checked={checked} onChange={()=>{onCheckedChanged()}}/></label>
            <DropdownWithLabel label="Filter By Categories" value={categories} onChange={handleCategoriesChange} options = {categoriesToBePassed}/>
            {
                filteredList.map((savings : Savings, index)=>(
                    <div key={index}> {savings.description} - {savings.amount} - {savings.category} </div>
                ))
            }
        </div>
    )
}

export default SavingsPage