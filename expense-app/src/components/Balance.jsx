import React from 'react'

import { Context } from '../context/Context'
import { useContext } from 'react'
export default function Balance() {
    const {transactions} = useContext(Context);
    const amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  const total = amount
    .reduce((preValue, currentValue) => preValue + currentValue, 0)
    .toFixed(2);
  return (
    <div>
        <h2>My balance</h2>
        <h1 className={total > 100 ? "plus" : "minus"}>{total}</h1>
    </div>
  )
}
