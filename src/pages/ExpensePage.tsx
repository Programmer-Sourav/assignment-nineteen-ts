import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState} from "../reducer/FinanceReducer"
import { getExpenseList } from "../actionCreators/actions.tsx"

const ExpensePage : React.FC = () : JSX.Element => {

    const dispatch = useDispatch()
    const expenses = useSelector((state : FinanceState)=>state.expenseList)
    console.log(333, expenses)

    useEffect(()=>{dispatch(getExpenseList())},[])

    return(
        <div> 
         {
             expenses.map((state, index)=>(
                   <div key={index}>{state.description} - {state.amount} - {state.description} </div>
             ))
         }
        </div>
    )
}
export default ExpensePage