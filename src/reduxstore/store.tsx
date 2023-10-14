import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import financeReducer from "../reducer/FinanceReducer.tsx";



const store = createStore(financeReducer, applyMiddleware(thunk))

export default store