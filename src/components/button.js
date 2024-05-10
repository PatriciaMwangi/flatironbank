export default function Button({children,transactions,setTransactions,id}){
   // console.log(typeof transactions,'bu')
  // console.log(transactions,'p')


function handleMe(){
  fetched(id)
    let filtere=transactions.filter((transaction)=>{
    return (
        id !== transaction.id

    )
})
setTransactions([...filtere])
console.log(transactions,'t')
console.log(filtere,'f')
}

function fetched (){
    fetch(`http://localhost:3001/transactions/${id}`,{
    method:'DELETE',
    headers:{
        "Content-Type":"application/json"
    }})

.then((res)=>res.json())
.then((data)=>console.log('transaction deleted'))

}

return(
    <button onClick={()=>handleMe()}>{children}</button>
   
)
}