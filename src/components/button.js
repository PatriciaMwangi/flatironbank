export default function Button({children,transactions,setTransactions,id}){
   // console.log(typeof transactions,'bu')
  // console.log(transactions,'p')


function handleMe(id){
  
    let filtere=transactions.filter((transaction)=>{
    return (
        id !== transaction.id

    )
})
setTransactions([...filtere])
console.log(transactions,'t')
console.log(filtere,'f')
}

return(
    <button onClick={()=>handleMe(id)}>{children}</button>
   
)
}