import React, { useContext, useRef } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { AnimalContext } from "./AnimalProvider"

export default props => {
    const { locations } = useContext(LocationContext)
    const { addAnimals } = useContext(AnimalContext)
    const name = useRef("")
    const breed = useRef("")
    const location = useRef(0)

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimals({
                name: name.current.value,
                breed: breed.current.value,
                locationId: locationId,
                customerId: localStorage.getItem("kennel_customer")
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className = "animalForm">
            <h2 className = "animalForm__title">Admit Animal</h2>
            <fieldset>
                <div className = "form-group">
                    <label htmlFor = "animalName">Animal Name: </label>
                    <input
                        type = "text"
                        name = "animalName"
                        ref = {name}
                        required
                        autoFocus
                        className = "form-control"
                        placeholder = "Animal name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className = "form-group">
                    <label htmlFor = "animalBreed">Animal Breed: </label>
                    <input
                        type = "text"
                        name = "animalBreed"
                        ref = {breed}
                        required
                        className = "form-control"
                        placeholder = "Animal breed"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className = "form-group">
                    <label htmlFor = "location">Location: </label>
                    <select
                        defaultValue = ""
                        name = "location"
                        ref = {location}
                        className = "form-control"
                    >
                        <option value = "0">Select a location</option>
                        {locations.map(e => (
                            <option key = {e.id} value = {e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type = "submit"
                onClick = {
                    evt => {
                        evt.preventDefault()
                        constructNewAnimal()
                    }
                }
                className = "btn btn-primary">
                Make Reservation
            </button>
        </form>
    )
}