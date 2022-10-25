import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { numberWithCommas } from '../utils/format'
export default function Transaction({transaction}) {
    const {deleteTransaction} = useContext(Context)
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
          {transaction.text} <span >{numberWithCommas(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} class="delete-btn">x</button>
    </li>
  )
}
