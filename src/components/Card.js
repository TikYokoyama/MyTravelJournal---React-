import React from "react"

export default function Card(props){
    return(
        <section className="card">
            <div>
                <img className="card--img" src={`../../public/images/${props.item.image}`} alt="Singapura"/>
            </div>
            <div className="card--infos">
                <span className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{props.item.location}</p>
                    <a className="card--linkG" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h2 className="card--place">{props.item.title}</h2>
                <h3 className="card--visitDate">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
                <p className="card--placeInfo">{props.item.description}</p>
            </div>
        </section>
        
    )
}