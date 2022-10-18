import React from 'react'
import Transaction from './Transaction'
import { Context } from '../context/Context'
import { useContext } from 'react'
export default function TransactionList() {
    const {transactions} = useContext(Context)
  return (
    <div>
        <h3>My Transactions</h3>
      <div className='list'>
        <ul id="list" class="ulList">
         {transactions.map((transaction) =>  {
            return <Transaction key={transaction.id} transaction={transaction}/>
         })}
        
      </ul>
      </div>
    </div>
  )
}
