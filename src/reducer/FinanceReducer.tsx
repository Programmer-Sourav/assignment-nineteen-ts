
export type Income = {
  id: number, 
  description: string, 
  amount: number, 
  category: string
}

export type Expense = {
  id: number, 
  description: string, 
  amount: number, 
  category: string
}

export type Savings = {
   id: number, 
   description: string, 
   amount: number, 
   category: string
}

export type User = {
  username: string
}

export interface FinanceState {
    incomeList: Income[], 
    expenseList: Expense[], 
    savingsList: Savings[], 
    users : User[]

    totalIncome: number, 
    totalExpense: number, 
    totalSavings: number
}

const initialState : FinanceState =  {
   incomeList: [],
   expenseList: [], 
   savingsList: [], 
   users : [],

   totalIncome : 0,
   totalExpense: 0,
   totalSavings: 0
}

type Action = 
| { type: "FETCH_INCOME_SUCESS", payload: Income}
| { type: "FETCH_EXPENSE_SUCCESS"}
| { type: "FETCH_SAVINGS_SUCCESS"}
| { type: "CALCULATE_TOTAL_INCOME"}
| {type: "CALCULATE_TOTAL_EXPENSE"}
| {type: "CALCULATE_TOTAL_SAVINGS"}
| {type: "FETCH_USER_SUCCESS"}
| {type: "SORT_DATA"}

const financeReducer = (state  : FinanceState = initialState, action : Action ) : FinanceState =>{
    switch(action.type){
        case "FETCH_INCOME_SUCESS": 
            return {...state, incomeList : [...state.incomeList, action.payload]}
        case "FETCH_EXPENSE_SUCCESS": 
             return {...state}
        case "FETCH_SAVINGS_SUCCESS": 
             return {...state}
        case "CALCULATE_TOTAL_INCOME":
             return {...state}
        case "CALCULATE_TOTAL_EXPENSE":
            return {...state}
        case "CALCULATE_TOTAL_SAVINGS": 
             return {...state}
        case "SORT_DATA":
            return {...state}
        case "FETCH_USER_SUCCESS": 
            return {...state}    
        default: 
        return state   
    }
}

export default financeReducer