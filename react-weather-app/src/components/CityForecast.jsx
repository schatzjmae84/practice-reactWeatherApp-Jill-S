import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import weatherData from "../assets/data.json"
import { Link } from "react-router";

export default function CityForecast() {
    const {cityName} = useParams();
    const weatherInfo = weatherData[cityName];
    const detailsRef = useRef(null);
    const displayWeather = weatherInfo || "Weather Information is unavailable";

    
    /*useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => getWeather(data)         
        );
    }, []);*/    

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <h2>{cityName}</h2>
            <p>{displayWeather.summary}</p>
            <button onClick={scrollToDetails}>Weather Details</button>
            <div ref={detailsRef} className= "details">
            <p>{displayWeather.details}</p>
            <Link to="/">Find Weather in another City!</Link>
            </div>
        </div>

    );
}

