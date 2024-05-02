import { useState } from "react"
import Row from "./Row"
export default function Table({transactions,setTransactions}){

  //console.log(typeof setTransactions,'gu')

    return (
        <>
        <table className="table table-striped">
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
            <Row transactions={transactions} setTransactions={setTransactions} />
            </tbody>
        </table>
        </>
    )
}