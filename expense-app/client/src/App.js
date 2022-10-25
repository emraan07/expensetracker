import "./styles.css";
import Balance from "./components/Balance"
import AddTransaction from "./components/AddTransaction";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { data ,Context } from "./context/Context";
import { Reducer } from "./context/Reducer";
import { useReducer } from "react";
import axios from "axios";


function App() {
  const [state, dispatch] = useReducer(Reducer, data)

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions")
      console.log(res.data.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      })
    } catch (err) {
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: err.response.data.error
        })
    }
  }

  async function addTransaction(newTransaction) {
    const config = {
      headers: {
        'Content-Type': "application/json"
      }
    }
    try {
      const res = await axios.post("/api/v1/transactions", newTransaction, config)
    dispatch({
      type: "ADD_TRANSACTION",
      payload: res.data.data
    })
    } catch (err) {
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: err.response.data.error
        })
    }
  }
  async function deleteTransaction(id) {
    
    try {
      await axios.delete(`/api/v1/transactions/${id}`)
      dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
    } catch (err) {
      dispatch({
          type: "TRANSACTION_ERROR",
          payload: err.response.data.error
        })
    }
    
  }
  return (
    <div className="container">
     <Context.Provider value={{transactions: state.transactions, getTransactions, loading: state.loading, error: state.error, addTransaction, deleteTransaction}}>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
     </Context.Provider>
    </div>
     
  );
}

export {App};
