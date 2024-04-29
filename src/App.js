import { useState } from 'react';
import './App.css';
import Table from './components/Table'
import Search from './components/search';
import Form from './components/form';

function App() {
  let newTransactions=[ 
    {
    date:'12/9/2019',
    description:'paycheck from krusty crab',
    category:'income',
    amount: 500
},
{
    date:'8/7/2019',
    description:'Yolo',
    category:"Food",
    amount:350
},
{
    date:'6/5/2019',
    description:"thrift shops",
    category:'thrift',
    amount:2500
}]
let [transactions, setTransactions]=useState([...newTransactions] )
  return (
   <>
   <Search newTransactions={newTransactions} transactions={transactions} setTransactions={setTransactions}/>
<Form/>
<Table  transactions={transactions}/>
   </>
  );
}

export default App;
