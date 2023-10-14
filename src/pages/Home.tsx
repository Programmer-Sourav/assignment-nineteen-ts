import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FinanceState, User } from "../reducer/FinanceReducer"
import { fetchUsersList, getUsers } from "../actionCreators/actions"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"


const Home : React.FC = () : JSX.Element =>{

    type AppDispatch = ThunkDispatch<FinanceState, void, AnyAction>;
    const dispatch : AppDispatch = useDispatch()

    const users = useSelector((state : FinanceState)=>state.users)

    console.log("Users ", users)

    useEffect(() => {
        dispatch(getUsers())
      }, []);

    return(
        <div> 
         {
            users.map((user : User, index)=>(
                // <li key={index}>{user.username}</li>
                <li></li>
            ))
         }
        </div>
    )
}


export default Home