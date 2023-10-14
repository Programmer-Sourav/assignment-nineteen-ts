import React, { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState, Income } from "../reducer/FinanceReducer"
import { calculateTotalIncome, getIncomeList, sortIncomeData } from "../actionCreators/actions"
import { DropdownWithLabel } from "../components/DropdownWithLabel"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"

const IncomePage : React.FC  = () : JSX.Element=> {

    const [categories, setCategories] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false)
   
    const incomeList = useSelector((state : FinanceState)=>state.incomeList)
    const totalAmount = useSelector((state: FinanceState)=>state.totalIncome)
    type AppDispatch = ThunkDispatch<FinanceState, void, AnyAction>;

    const dispatch : AppDispatch = useDispatch()
    useEffect(()=>{dispatch(getIncomeList())},[])

    const onCheckedChanged = () =>{
      setChecked(checked=>!checked)
      if(!checked)
      dispatch(sortIncomeData())
    }

    const categoriesToBePassed =    [
    {label: "Select", value: "Select"},    
    {label: "Salary", value: "Salary"}, 
    {label: "Business", value: "Business"},
    {label: "Services", value: "Services"},
    {label: "Random", value: "Random"},
    {label: "Others", value: "Others"}]

    const handleCategoriesChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setCategories(e.target.value)
    }


    let filteredList = incomeList

   if(categories!=="Select"){
    filteredList = incomeList.filter((income)=>(income.category.includes(categories)))
   }


   useEffect(()=>{dispatch(calculateTotalIncome())},[])
    



    return(
        <div>
            <label>Sort Data 
            <input type="checkbox" checked={checked} onChange={()=>{onCheckedChanged()}}/>
            <DropdownWithLabel label="Filter By Categories" value={categories} onChange={handleCategoriesChange} options = {categoriesToBePassed}/>
            </label>
            {
                filteredList.map((income, index)=>(
                   <div key ={index}> {income.description}-{income.amount}-{income.category}</div>
                ))
            }
           <hr></hr>
           <h2>Total : {totalAmount}</h2>
        </div>
    )
}

export default IncomePage