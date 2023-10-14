
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import AddEntryForm from './pages/AddEntryForm.tsx';
import IncomePage from "./pages/IncomePage.tsx"
import ExpensePage from "./pages/ExpensePage.tsx"
import SavingsPage from "./pages/SavingsPage.tsx"


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/addentry">Make An Entry</Link>
      <Link to="/income-transaction">Income Transactions</Link>
      <Link to="/expense-transaction">Expense Transactions</Link>
      <Link to="/savings-transaction">Savings Transactions</Link>

      <Routes>
        <Route path='/'></Route>
        <Route path='/addentry' element={<AddEntryForm/>}>Add Entry</Route>
        <Route path='/income-transaction' element={<IncomePage/>}>Income Transactions</Route>
        <Route path='/expense-transaction' element={<ExpensePage/>}>Expense Transaction</Route>
        <Route path='/savings-transaction' element={<SavingsPage/>}>Savings Transaction</Route>
      </Routes>
    </div>
  );
}

export default App;
