export default function Form(){
    return(
    <>
    <form className="row">
        <div className= 'col-3'>
        <input type="date" className="form-control" placeholder='date'name='date'></input>
        </div>
        <div className= 'col-3'>
        <input type="text" className="form-control" placeholder='description'name='description'></input>
        </div>
        <div className= 'col-3'>
        <input type="text" className="form-control" placeholder='category'name='category'></input>
        </div>
        <div className= 'col-3'>
        <input type="number" className="form-control" placeholder='amount'name='amount'></input>
        </div>
        
        <div className= 'col-4 mx-auto'>
            <button type="submit" className="col-12">Add transaction</button>
      
        </div>
    </form>
    </>
 )}