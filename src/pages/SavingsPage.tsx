import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState} from "../reducer/FinanceReducer"
import { getSavingsList } from "../actionCreators/actions.tsx"


const SavingsPage : React.FC  = () : JSX.Element =>{
   const dispatch = useDispatch()
   const savingsList = useSelector((state: FinanceState)=>state.savingsList)

   useEffect(()=>{dispatch(getSavingsList())}, [])
    return(
        <div>
            {
                savingsList.map((savings, index)=>(
                    <div key={index}> {savings.description} - {savings.amount} - {savings.category} </div>
                ))
            }
        </div>
    )
}

export default SavingsPage