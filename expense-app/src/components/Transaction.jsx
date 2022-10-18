import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
export default function Transaction({transaction}) {
    const {deleteTransaction} = useContext(Context)
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
          {transaction.description} <span >{transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
    </li>
  )
}
