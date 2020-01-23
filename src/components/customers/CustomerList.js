import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"


export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
            {
                customers.map(cstmr => <Customer key={cstmr.id} customer={cstmr} />)
            }
        </div>
    )
}