import Button from "./button";
export default function Row({transactions,setTransactions}){
  //  console.log("TR",typeof transactions)
   // console.log("Tm",typeof setTransactions)

 if (!Array.isArray(transactions)) {
        console.error("Transactions is not an array:", transactions);
        return null; // or return an error message
      }
     transactions.filter((transaction)=>transaction.category).sort((a,b)=>a.category.localeCompare(b.category));
console.log (transactions)
    let rows =   transactions.map((transaction,index)=>{
        return(  
           <tr key={index}>
           <td>{transaction.date}</td>
           <td> {transaction.description}</td>
           <td> {transaction.category}</td>
           <td>  {transaction.amount}</td>
           <td><Button id={transaction.id} transactions={transactions} setTransactions={setTransactions}>
            <span>Delete</span></Button></td>
         
       </tr>
      
       )}
)
    return(
        <>
    
{rows}

        </>
 )
}