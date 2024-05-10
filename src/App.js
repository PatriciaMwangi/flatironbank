import { useState,useEffect } from 'react';
import './App.css';
import Table from './components/Table'
import Search from './components/search';
import Form from './components/form';

function App() {

const [transactions, setTransactions]=useState([])

 useEffect(
  ()=>{fetch("https://json-server-sg8o.onrender.com/transactions",{
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
  }).then(response => {
    console.log(response)
    if(!response.ok){
      throw new Error('problem')
    }
   return (
    response.json()
  )
  
 })
  
  .then((data) => {
   setTransactions([...data])
   
  })},[])
 
  return (
   <>
   <h1 className='text-primary-centre bg-primary-subtle text-lg-justified'>The Flatiron Bank</h1>
   <Search  transactions={transactions} setTransactions={setTransactions}/>
<Form transactions={transactions} setTransactions={setTransactions}/>
<Table  transactions={transactions} setTransactions={setTransactions}/>
   </>
  );
}

export default App;
