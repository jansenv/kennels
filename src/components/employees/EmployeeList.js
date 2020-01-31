import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../locations/LocationProvider"

export default props => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
            <h1>Employees</h1>

            <button onClick = {() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className = "employeeList">
                {
                    employees.map(employee => {
                        // Find this employee's matching location object
                        const foundedLocation = locations.find(
                            (location) => {
                                return location.id === employee.locationId
                            }
                        )

                        // Pass the matching location to Employee component
                        return <Employee key={employee.id}
                            location={foundedLocation}
                            employee={employee} />
                    })
                }
            </article>
        </div>
    )
}