import React from 'react'
import { useState, useContext } from 'react'
import { Context } from '../context/Context';
export default function AddTransaction() {
   const [state, setState] = useState(false)
   const [text, setText] = useState('');
   const [amount, setAmount] = useState(0)

   const {addTransaction} = useContext(Context)
   function onSubmit(e) {
        e.preventDefault()
        const formData = {
            id: Math.floor(Math.random() * 10000),
            description: text,
            amount: Number(amount)
        }
        addTransaction(formData)
        setText('')
        setAmount(0)
        console.log(formData);
   }
   console.log(addTransaction);
  return (
    <div className='footer'>
        <button className='btn' onClick={() => setState(true)}>+</button>
      <div className='addTransaction'>
        
        <form onSubmit={onSubmit}  id="form" style={{display : state === false ? "none" : ""}}>
        <button className='cancelBtn' onClick={() => setState(false)}>x</button>
        <div class="form-control">
          <label htmlFor='description'>Text</label>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text}  placeholder="description" required/>
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" onChange={(e)=> setAmount(e.target.value)} value={amount} placeholder="e.g -200 for expense" required/>
        </div>
        <button class="addTransactionbtn">Add</button>
      </form>
      </div>
    </div>
  )
}
