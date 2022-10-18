import "./styles.css";
import Balance from "./components/Balance"
import AddTransaction from "./components/AddTransaction";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { data ,Context } from "./context/Context";
import { Reducer } from "./context/Reducer";
import { useReducer } from "react";


function App() {
  const [state, dispatch] = useReducer(Reducer, data)
  function addTransaction(newTransaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction
    })
  }
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }
  return (
    <div className="container">
     <Context.Provider value={{transactions: state.transactions, addTransaction, deleteTransaction}}>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
     </Context.Provider>
    </div>
     
  );
}

export {App};
