import React from "react"

export default function Main(){
    return(
        <section className="card">
            <div>
                <img className="card--img" src="../images/singapura.jpg" alt="Singapura"/>
            </div>
            <div className="card--infos">
                <span className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Japan</p>
                    <a className="card--linkG" href="https://www.google.com/maps">View on Google Maps</a>
                </span>
                <h2 className="card--place">Mount Fuji</h2>
                <h3 className="card--visitDate">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="card--placeInfo">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
        
    )
}