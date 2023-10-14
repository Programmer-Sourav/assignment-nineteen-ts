import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState, Income } from "../reducer/FinanceReducer"
import { getIncomeList } from "../actionCreators/actions.tsx"

const IncomePage : React.FC  = () : JSX.Element=> {

    const dispatch = useDispatch()

    const incomeList = useSelector((state : FinanceState)=>state.incomeList)
    console.log(1234, incomeList)


    useEffect(()=>{dispatch(getIncomeList())},[])

    return(
        <div>
            {
                incomeList.map((income, index)=>(
                   <div key ={index}> {income.description}-{income.amount}-{income.category}</div>
                ))
            }

        </div>
    )
}

export default IncomePage