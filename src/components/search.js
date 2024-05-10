

 export default function Search({transactions,setTransactions}){
    function handler(event){
        let target=event.target.value.trim().toLowerCase()
        let filtered=transactions.filter((transaction)=>{
            return transaction.description && transaction.description.toLowerCase().includes(target)
            
        })
        setTransactions(target.length > 0 && filtered.length > 0 ? filtered:transactions)
        console.log('fi',filtered)
    }

    function handleCategory(event){
let target=event.target.value.trim().toLowerCase()
let filtered=transactions.filter((transaction)=>{
    return transaction.category && transaction.category.toLowerCase().includes(target)
})

setTransactions(target.length >0 ? filtered:[...transactions])}
      function handleAll(event){
         
            handler(event)
            handleCategory(event)
        }
           
      
    return(
        <>
        
         <div className='p-4 m-3'>
            <input onChange={handleAll} className='form-control form-control-sm'type="text" placeholder="Type transaction here">

            </input>
        </div>
        </>
    )
 }
