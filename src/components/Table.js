

import Row from "./Row";

export default function Table({transactions,handleDelete}) {
    

    return (
        <>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>                    
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <Row
                            key={index} 
                            index={index}
                            date={transaction.date}
                            description={transaction.description}
                            category={transaction.category}
                            amount={transaction.amount}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}
