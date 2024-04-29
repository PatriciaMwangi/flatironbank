

 export default function Search({newTransactions,transactions,setTransactions}){
    function handler(event){
        let target=event.target.value.toLowerCase()
        let filtered=transactions.filter((transaction)=>{
            return transaction.description.toLowerCase().includes(target)
            
        })
        setTransactions(target.length >0 && filtered.length > 0? filtered:newTransactions)
        console.log(transactions)
      }
    return(
        <>
        
         <div className='p-4 m-3'>
            <input onChange={handler} className='form-control form-control-sm'type="text" placeholder="Type transaction here">

            </input>
        </div>
        </>
    )
 }
