import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState} from "../reducer/FinanceReducer"

export const ExpensePage : React.FC = () : JSX.Element => {

    const dispatch = useDispatch()
    const expenses = useSelector((state : FinanceState)=>state.expenseList)
    
    return(
        <div> 
         {
             expenses.map((state)=>(
                   <div> </div>
             ))
         }
        </div>
    )
}