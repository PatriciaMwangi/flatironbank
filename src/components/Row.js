import Button from './button'
export default function Row({date, description, category, amount,index,handleDelete}){
    return(
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td> 
            
            <td>
                <Button index={index} handleDelete={handleDelete}>
                    <span>Delete</span>
                </Button>
            </td>
           
        </tr>
        
    )
}