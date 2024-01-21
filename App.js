import React from "react"
import data from "./data"
import Location from "./components/Location"

export default function App() {
    const locations = data.map(location => {
        console.log(location)
        return ( 
            <Location 
                key={location.title}
                location={location}
            /> 
        )
    })
         return (
            <div className="locations-section">
                {locations}
            </div> 
        ) 
}