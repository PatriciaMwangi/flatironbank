export default function Row({transactions}){

  
    return(
        <>
        {transactions.map((transaction,index)=>{
          return(  
             <tr key={index}>
             <td>{transaction.date}</td>
             <td> {transaction.description}</td>
             <td> {transaction.category}</td>
             <td>  {transaction.amount}</td>
         </tr>
)})}
        
        </>
 )
}