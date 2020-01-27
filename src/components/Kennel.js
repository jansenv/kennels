import React from "react"
import { Route } from "react-router-dom"
import "./Kennel.css"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

export default () => (
    <>
    <NavBar />
    <ApplicationViews />
    </>
)

// import React from "react"
// import "./Kennel.css"
// import "./animal/Animals.css"
// import "./customers/Customer.css"
// import "./employees/Employee.css"
// import "./locations/Location.css"
// import { LocationProvider } from "./locations/LocationProvider"
// import LocationList from "./locations/LocationList"
// import { AnimalProvider } from "./animal/AnimalProvider"
// import AnimalList from "./animal/AnimalList"
// import { CustomerProvider } from "./customers/CustomerProvider"
// import CustomerList from "./customers/CustomerList"
// import { EmployeeProvider } from "./employees/EmployeeProvider"
// import EmployeeList from "./employees/EmployeeList"

// export default () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalProvider>
//                 <AnimalList />
//             </AnimalProvider>
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeProvider>
//                 <EmployeeList />
//             </EmployeeProvider>
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <LocationProvider>
//                 <LocationList />
//             </LocationProvider>
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerProvider>
//                 <CustomerList />
//             </CustomerProvider>
//         </article>
//     </>
// )