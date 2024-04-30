import {useState} from 'react'
export default function Form({transactions,setTransactions}){

    const [formData,setFormData]=useState({
            date:'',
            description:'',
            category:'',
            amount:'',
            
         } )
         function change(event){
            let {name,value}=event.target

            setFormData({
                
               [name] : value
          } )
         console.log(value)
         }
         function submit(event){
            event.preventDefault()
            
      
       
           let finalData = [...transactions,formData]
            setTransactions(finalData)
          
         }
    console.log(transactions,"aftermath")
    return(
       
    <>
    <form onSubmit={submit} className="row">
        <div className= 'col-3'>
        <input type="date" className="form-control" onChange={change} placeholder='date'name='date'value={formData.date}></input>
        </div>
        <div className= 'col-3'>
        <input type="text" className="form-control" onChange={change} placeholder='description'name='description'value={formData.description}></input>
        </div>
        <div className= 'col-3'>
        <input type="text" className="form-control" onChange={change} placeholder='category'name='category' value={formData.category}></input>
        </div>
        <div className= 'col-3'>
        <input type="number" className="form-control" onChange={change} placeholder='amount'name='amount'value={formData.amount}></input>
        </div>
        
        <div className= 'col-4 mx-auto'>
            <button type="submit" className="col-12">Add transaction</button>
      
        </div>
    </form>
    </>
 )}