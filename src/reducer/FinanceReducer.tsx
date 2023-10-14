


export type Income = { 
  description: string, 
  amount: number, 
  category: string
}

export type Expense = {
  description: string, 
  amount: number, 
  category: string
}

export type Savings = {
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
| { type: "FETCH_INCOME_SUCESS", payload: Income[]}
| { type: "FETCH_EXPENSE_SUCCESS", payload: Expense[]}
| { type: "FETCH_SAVINGS_SUCCESS", payload: Savings[]}
| { type: "CALCULATE_TOTAL_INCOME"}
| {type: "CALCULATE_TOTAL_EXPENSE"}
| {type: "CALCULATE_TOTAL_SAVINGS"}
| {type: "FETCH_USER_SUCCESS", payload: User[]}
| {type: "SORT_INCOME_DATA"}
| {type: "SORT_SAVINGS_DATA"}
| {type: "SORT_EXPENSES_DATA"}
| {type: "ADD_INCOME_SUCCESS", payload: Income}
| {type: "ADD_SAVINGS_SUCCESS", payload: Savings}
| {type: "ADD_EXPENSE_SUCCESS", payload: Expense}

const financeReducer = (state  : FinanceState = initialState, action : Action ) : FinanceState =>{
    switch(action.type){
        case "FETCH_INCOME_SUCESS": 
            console.log(3444, action.payload)
            return {...state, incomeList : action.payload}
        case "FETCH_EXPENSE_SUCCESS":
          console.log(444, action.payload) 
             return {...state, expenseList: action.payload}
        case "FETCH_SAVINGS_SUCCESS": 
             return {...state, savingsList : action.payload}
        case "CALCULATE_TOTAL_INCOME":
             return {...state}
        case "CALCULATE_TOTAL_EXPENSE":
            return {...state}
        case "CALCULATE_TOTAL_SAVINGS": 
             return {...state}
        case "SORT_INCOME_DATA":
            return {...state, incomeList: state.incomeList.sort((a :Income, b : Income)=>a.amount>b.amount ? 1 : -1)}
        case "SORT_SAVINGS_DATA":
              return {...state, savingsList: state.savingsList.sort((a :Savings, b : Savings)=>a.amount>b.amount ? 1 : -1)}
        case "SORT_EXPENSES_DATA":
                return {...state, expenseList: state.expenseList.sort((a :Expense, b : Expense)=>a.amount>b.amount ? 1 : -1)}    
        case "FETCH_USER_SUCCESS": 
            return {...state, users: [...state.users, ...action.payload]}  
        case "ADD_INCOME_SUCCESS":
            return {...state, incomeList: [...state.incomeList, action.payload]}    
        case "ADD_SAVINGS_SUCCESS":
              return {...state, savingsList: [...state.savingsList, action.payload]}    
        case "ADD_EXPENSE_SUCCESS":
                return {...state, expenseList: [...state.expenseList, action.payload]}          
        default: 
        return state   
    }
}

export default financeReducer