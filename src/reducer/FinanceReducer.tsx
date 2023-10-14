
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

export interface FinanceState {
    incomeList: Income[], 
    expenseList: Expense[], 
    savingsList: Savings[], 

    totalIncome: number, 
    totalExpense: number, 
    totalSavings: number
}

const initialState : FinanceState =  {
   incomeList: [],
   expenseList: [], 
   savingsList: [], 

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
| {type: "SORT_DATA"}

const financeReducer = (state  : FinanceState = initialState, action : Action ) : FinanceState =>{
    switch(action.type){
        case "FETCH_INCOME_SUCESS": 
            return {...state, incomeList : [...state.incomeList, action.payload]}
        case "FETCH_EXPENSE_SUCCESS": 

        case "FETCH_SAVINGS_SUCCESS": 

        case "CALCULATE_TOTAL_INCOME":

        case "CALCULATE_TOTAL_EXPENSE":

        case "CALCULATE_TOTAL_SAVINGS": 

        case "SORT_DATA":

        default: 
        return state   
    }
}

export default financeReducer