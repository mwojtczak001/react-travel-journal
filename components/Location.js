import React from "react"
import data from "../data"

export default function Location(props) {
    return (
        <div className="travel-location">
            <img className="travel-image" src={props.location.imageUrl} />
            <div className="right-container">
                <div className="country-container">
                    <h3><i className="fa-solid fa-location-dot"></i>{props.location.location.toUpperCase()}</h3>
                    <a target="_blank" href={props.location.googleMapsUrl}>View on Google maps</a>
                </div>
                <div className="location-title">{props.location.title}</div>
                <div className="dates">{props.location.startDate} - {props.location.endDate}</div>
                <div className="location-description">{props.location.description}</div>
            </div>
        </div>
    )
}
/*

{location: 
    {
        title: "Mount Fuji", 
        location: "Japan", 
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8", 
        startDate: "12 Jan, 2021", 
        endDate: "24 Jan, 2021", 
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.", 
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    }
}

*/