import {useState} from 'react'
export default function Form({transactions,setTransactions}){
  
    const [formData,setFormData]=useState({
            date:'',
            description:'',
            category:'',
            amount:'',
            
         } )
       
        
   // console.log(transactions,"aftermath")
   
    function submit(event){
            event.preventDefault()
            setTransactions([...transactions,formData])
          addMe(formData)
         }
         function addMe(transactions){
            fetch("http://localhost:3001/transactions",{
               method:"POST",
               headers:{
                  "Content-Type": "application/json"
               },
               body:JSON.stringify(transactions)        
         })
         }

         function change(event){
            let {name,value}=event.target
      
            setFormData(FormData => ({
               ...FormData,
               [name]: value
           }));
         console.log(value)
         }
    return(
       
    <>
    <form onSubmit={submit} className="row">
        <div className= 'col-3'>
        <input required type="date" className="form-control" onChange={change} placeholder='date'name='date'value={formData.date}></input>
        </div>
        <div className= 'col-3'>
        <input required type="text" className="form-control" onChange={change} placeholder='description'name='description'value={formData.description}></input>
        </div>
        <div className= 'col-3'>
        <input required type="text" className="form-control" onChange={change} placeholder='category'name='category' value={formData.category}></input>
        </div>
        <div className= 'col-3'>
        <input required type="number" className="form-control" onChange={change} placeholder='amount'name='amount'value={formData.amount}></input>
        </div>
        
        <div className= 'col-4 mx-auto'>
            <button required type="submit" className="col-12">Add transaction</button>
      
        </div>
    </form>
    </>
 )}