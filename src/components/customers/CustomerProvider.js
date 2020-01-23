import React, { useState, useEffect } from "react"

export const CustomerContext = React.createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])
    
    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
        console.log("**** CUSTOMER APPLICATION STATE CHANGED ****")
        console.log(customers)
    }, [customers])
    
    return (
        <CustomerContext.Provider value={{
            customers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}