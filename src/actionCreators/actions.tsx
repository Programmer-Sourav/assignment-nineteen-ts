import { AnyAction, Dispatch } from "redux"
import { Expense, FinanceState, Income, Savings, User } from "../reducer/FinanceReducer"
import { ThunkAction } from "redux-thunk"

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


export const sortIncomeData = () =>(
    {
        type: "SORT_INCOME_DATA"
    }
)


export const sortSavingsData = () =>(
    {
        type: "SORT_SAVINGS_DATA"
    }
)


export const sortExpensesData = () =>(
    {
        type: "SORT_EXPENSES_DATA"
    }
)

export const calculateTotalIncome = () =>(
  {
      type: "CALCULATE_TOTAL_INCOME"
  }
)

export const calculateTotalSavings = () =>(
  {
      type: "CALCULATE_TOTAL_SAVINGS"
  }
)

export const calculateTotalExpenses = () =>(
  {
      type: "CALCULATE_TOTAL_EXPENSE"
  }
)

export const getUsers = () :ThunkAction<void, FinanceState, unknown, AnyAction>   => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/users")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.users
      console.log("Response", receivedResponse, itemsList)
      dispatch( {
        type: "FETCH_USER_SUCCESS",
        payload: itemsList
    })
    }
    catch(error){
      console.error("Error", error)
    }
  }

  export const getIncomeList = (): ThunkAction<void, FinanceState, unknown, AnyAction>   => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/income")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.income
      console.log("Response", receivedResponse, itemsList)
      dispatch(  {
        type: "FETCH_INCOME_SUCESS",
        payload: itemsList
    })
    }
    catch(error){
      console.error("Error", error)
    }
  }

  export const getExpenseList = (): ThunkAction<void, FinanceState, unknown, AnyAction>  => async (dispatch : Dispatch) =>{
    try{
      const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/expenses")
      const receivedResponse = await response.json()
      const itemsList = receivedResponse.expenses
      console.log("Response", receivedResponse, itemsList)
      dispatch(  {
        type: "FETCH_EXPENSE_SUCCESS",
        payload: itemsList
    })
    }
    catch(error){
      console.error("Error", error)
    }
  }

 export const getSavingsList = (): ThunkAction<void, FinanceState, unknown, AnyAction> => async (
  dispatch: Dispatch
) => {
  try {
    const response = await fetch("https://assignment-nineteen-backend.developersourav.repl.co/savings");
    const receivedResponse = await response.json();
    const itemsList = receivedResponse.savings;
    console.log("Response", receivedResponse, itemsList);

    // Dispatch the action object directly
    dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: itemsList });
  } catch (error) {
    console.error("Error", error);
  }
};

  export const addEntry = (entry : any) : ThunkAction<void, FinanceState, unknown, AnyAction> => async (dispatch : Dispatch) => {
    try {
      const response = await fetch(
        `https://assignment-nineteen-backend.developersourav.repl.co/add-${entry.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON"
          },
          body: JSON.stringify(entry)
        }
      );
      const parsedData = await response.json();
      if (entry.type === "Income") {
        dispatch({ type: "ADD_INCOME_SUCCESS", payload: parsedData.data });
      } else if (entry.type === "Savings") {
        dispatch({ type: "ADD_SAVINGS_SUCCESS", payload: parsedData.data });
      } else {
        console.log(123, entry.type);
        dispatch(  { type: "ADD_EXPENSE_SUCCESS", payload: parsedData.data });
      }
    } catch (error) {
      console.error("Error adding entry:", error);
      dispatch({ type: "ADD_ENTRY_FAILURE" });
    }
  };