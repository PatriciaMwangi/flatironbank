export default function Row({transactions}){
    console.log("TR",typeof(transactions))
   if (!Array.isArray(transactions)) {
        console.error("Transactions is not an array:", transactions);
        return null; // or return an error message
      }
transactions.sort((a,b)=>a.category.localeCompare(b.category));
console.log (transactions)
    let rows =   transactions.map((transaction,index)=>{
        return(  
           <tr key={index}>
           <td>{transaction.date}</td>
           <td> {transaction.description}</td>
           <td> {transaction.category}</td>
           <td>  {transaction.amount}</td>
       </tr>
       )})
     
    return(
        <>
    
{rows}
        
        </>
 )
}