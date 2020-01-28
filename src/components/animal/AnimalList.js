import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"


export default (props) => {
    const { animals } = useContext(AnimalContext)

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => props.history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">

                {
                    animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}