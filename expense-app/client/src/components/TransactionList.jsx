import React from 'react'
import Transaction from './Transaction'
import { Context } from '../context/Context'
import { useContext, useEffect } from 'react'
export default function TransactionList() {
    const {transactions, getTransactions} = useContext(Context)

    useEffect(() => {
      getTransactions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
        <h3>My Transactions</h3>
      <div className='list'>
        <ul id="list" class="ulList">
         {transactions.map((transaction) =>  {
            return <Transaction key={transaction._id} transaction={transaction}/>
         })}
        
      </ul>
      </div>
    </div>
  )
}
