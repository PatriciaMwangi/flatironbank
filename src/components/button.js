export default function Button({children,index,handleDelete}){

    return(
        <button onClick={()=>handleDelete(index)} className="btn btn-sm btn-danger">{children}</button>
    )
}