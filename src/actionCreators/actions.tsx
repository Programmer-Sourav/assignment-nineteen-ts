import { AnyAction, Dispatch } from "redux"
import { Expense, Income, Savings, User } from "../reducer/FinanceReducer"

export const ADD_ENTRY = (
    {
        type: "ADD_ENTRY"
    }
)

export const fetchUsersList = (users: User[])  => (
    {
        type: "FETCH_USER_SUCCESS",
        payload: users
    }
)

export const fetchExpensesList = (expenseList: Expense[])  => (
    {
        type: "FETCH_EXPENSE_SUCCESS",
        payload: expenseList
    }
)

export const fetchIncomeList = (incomeList: Income[])  => (
    {
        type: "FETCH_INCOME_SUCESS",
        payload: incomeList
    }
)

export const fetchSavingsList = (savingsList: Savings[])  => (
    {
        type: "FETCH_SAVINGS_SUCCESS",
        payload: savingsList
    }
)


export const getUsers = ()  => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/users")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.users
      console.log("Response", receivedResponse, itemsList)
      dispatch(fetchUsersList(itemsList))
    }
    catch(error){
      console.error("Error", error)
    }
  }

  export const getIncomeList = ()  => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/income")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.income
      console.log("Response", receivedResponse, itemsList)
      dispatch(fetchIncomeList(itemsList))
    }
    catch(error){
      console.error("Error", error)
    }
  }

  export const getExpenseList = ()  => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/expenses")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.expenses
      console.log("Response", receivedResponse, itemsList)
      dispatch(fetchExpensesList(itemsList))
    }
    catch(error){
      console.error("Error", error)
    }
  }

  export const getSavingsList = ()  => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/savings")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.savings
      console.log("Response", receivedResponse, itemsList)
      dispatch(fetchSavingsList(itemsList))
    }
    catch(error){
      console.error("Error", error)
    }
  }