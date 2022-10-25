import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import {numberWithCommas} from "../utils/format"
export default function IncomeExpense() {
    const {transactions} = useContext(Context)
    const amount = transactions.map((transaction) => transaction.amount)
    const income = amount.filter((item) => item > 0).reduce((preValue, currentValue) => preValue+currentValue,0).toFixed(2)
    const expense = amount.filter((item) => item < 0).reduce((preValue, currentValue) => preValue+currentValue,0).toFixed(2)
  return (
    <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+{numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">{numberWithCommas(expense)}</p>
        </div>
    </div>
  )
}
