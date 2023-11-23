import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputForm = ({setItems, items}) => {

 const[name,setName] = useState("");
  const[amount,setAmount] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        //  Before seeting up local storage
        // setHistoryList(
        //   [...historyList,{name,amount:parseInt(amount),id:uuidv4()}]
        // )

        // To set Local Stroage
        setItems([...items,{name,amount:parseInt(amount),id:uuidv4()}])
        setAmount(0);
        setName("")
        
      }
  return (
   <div>
    <h2>Add new transcations</h2>
    <div className="h-line"></div>
    {/* Here goes form */}
    <form className="input-form" onSubmit={handleSubmit}>
          <label htmlFor="input-name">Text</label>
          <input
          required 
          id="input-name" 
          name="name" 
          placeholder="Enter text..."
          value={name}
          onChange={ (e) => {
            setName(e.target.value)
          } }
          />
          <label htmlFor="input-amount">Amount</label>
          <label htmlFor="input-amount">(Negative-expense, Positive-income)</label>
          <input
          required 
          id="input-amount" 
          type="number" 
          name="amount"
          placeholder="Enter amount..."
          value={amount}
          onChange= { (e) =>{
            setAmount(e.target.value);
          }}
          />
          <button type="submit">Add transcation</button>
        </form>
  </div>

    
  )
}

export default InputForm;