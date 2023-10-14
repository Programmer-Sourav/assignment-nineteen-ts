import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState} from "../reducer/FinanceReducer"


const SavingsPage : React.FC  = () : JSX.Element =>{
   const dispatch = useDispatch()
   const savingsList = useSelector((state: FinanceState)=>state.savingsList)

    return(
        <div>
            {
                savingsList.map((savings)=>(
                    <div> </div>
                ))
            }
        </div>
    )
}

export default SavingsPage