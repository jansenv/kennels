import React from "react"
import "./Employee.css"

export default ( { employee } ) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location id: {employee.locationId}</div>
    </section>
)