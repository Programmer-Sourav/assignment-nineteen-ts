import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState, Income } from "../reducer/FinanceReducer"

const IncomePage : React.FC  = () : JSX.Element=> {

    const dispatch = useDispatch()

    const incomeList = useSelector((state : FinanceState)=>state.incomeList)


    return(
        <div>
            {
                incomeList.map((income)=>(
                   <div> </div>
                ))
            }

        </div>
    )
}

export default IncomePage