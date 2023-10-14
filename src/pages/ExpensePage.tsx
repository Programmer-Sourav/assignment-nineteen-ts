import React, { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState} from "../reducer/FinanceReducer"
import { calculateTotalExpenses, getExpenseList, sortExpensesData } from "../actionCreators/actions"
import { DropdownWithLabel } from "../components/DropdownWithLabel"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"

const ExpensePage : React.FC = () : JSX.Element => {

    type AppDispatch = ThunkDispatch<FinanceState, void, AnyAction>;

    const dispatch : AppDispatch = useDispatch()
    const expenses = useSelector((state : FinanceState)=>state.expenseList)
    const [checked, setChecked] = useState<boolean>(false)
    const [categories, setCategories] = useState<string> ("")
   
    const totalExpense = useSelector((state: FinanceState)=>state.totalExpense)

    useEffect(()=>{dispatch(getExpenseList())},[])


    const onCheckedChanged = () =>{
        setChecked(checked=>!checked)
        if(!checked)
        dispatch(sortExpensesData())
      }
    
      const categoriesToBePassed =    [
      {label: "Select", value: "Select"},    
      {label: "Home", value: "Home"}, 
      {label: "Medical", value: "Medical"},
      {label: "Regular", value: "Regular"},
      {label: "Outing", value: "Outing"},
      {label: "Extra", value: "Extra"},
      {label: "Some Cost", value: "Some Cost"},
      {label: "Others", value: "Others"}]
    
      const handleCategoriesChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
          setCategories(e.target.value)
      }
    
    
      let filteredList = expenses
    
     if(categories!=="Select"){
      filteredList = expenses.filter((expense)=>(expense.category.includes(categories)))
     }

     useEffect(()=>{calculateTotalExpenses()}, [])

    return(
        <div> 
            <label>Sort Data 
            <input type="checkbox" checked={checked} onChange={()=>{onCheckedChanged()}}/></label>
            <DropdownWithLabel label="Filter By Categories" value={categories} onChange={handleCategoriesChange} options = {categoriesToBePassed}/>
         {
             filteredList.map((state, index)=>(
                   <div key={index}>{state.description} - {state.amount} - {state.description} </div>
             ))
         }
         <hr/>
         <h2>Total Expenses: {totalExpense}</h2>
        </div>
    )
}
export default ExpensePage