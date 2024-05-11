import React, { useState } from 'react';

const Form = ({ addTransaction }) => {
    const [transactions, setTransactions] = useState(
        { date: "",
         description: '',
       category: "", 
       amount: "" 
      })


    const handleChange = (e) => {
        setTransactions({ ...transactions, [e.target.name]: e.target.value })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTransaction(transactions)
        setTransactions({ date: "", 
        description: '',
         category: "",
          amount: "" 
         })

    };

    return (
        <div >
            <form onSubmit={handleFormSubmit} className='row g-3 mt-1'>
                <div className='col-md-3'>
           
                    <input type="date" name="date" value={transactions.date} onChange={handleChange} className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input type="text" name="description" value={transactions.description} placeholder="Description" required onChange={handleChange} className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input type="text" name="category" placeholder="Category" value={transactions.category} required onChange={handleChange} className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input type="number" name="amount" placeholder="Amount" value={transactions.amount} required onChange={handleChange} className='form-control' />
                </div>
                <div className='col-md-12 d-flex justify-content-center'> {/* Centering the button */}

                    <button type="submit" className='btn btn-outline-info' style={{width:'300px',display:'flex', justifyContent:"center", textAlign:'center',backgroundColor:"#d3e4f5"}}>Add Transaction</button>
               </div>
            </form>




        </div>
    );
};

export default Form;