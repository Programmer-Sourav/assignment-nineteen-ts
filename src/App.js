
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import AddEntryForm from './pages/AddEntryForm.tsx';
import IncomePage from "./pages/IncomePage.tsx"
import ExpensePage from "./pages/ExpensePage.tsx"
import SavingsPage from "./pages/SavingsPage.tsx"
import Home from './pages/Home.tsx';


function App() {
  return (
    <div className="App">
      <Link to="/" className='linkgap'>Home</Link>
      <Link to="/addentry" className='linkgap'>Make An Entry</Link>
      <Link to="/income-transaction" className='linkgap' >Income Transactions</Link>
      <Link to="/expense-transaction" className='linkgap'>Expense Transactions</Link>
      <Link to="/savings-transaction" className='linkgap'>Savings Transactions</Link>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addentry' element={<AddEntryForm/>}>Add Entry</Route>
        <Route path='/income-transaction' element={<IncomePage/>}>Income Transactions</Route>
        <Route path='/expense-transaction' element={<ExpensePage/>}>Expense Transaction</Route>
        <Route path='/savings-transaction' element={<SavingsPage/>}>Savings Transaction</Route>
      </Routes>
    </div>
  );
}

export default App;
