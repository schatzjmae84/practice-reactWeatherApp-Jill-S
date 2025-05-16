import React from "react";
import { useParams, useRef } from "react-router";
import weatherData from "../assets/data.json"

export default function CityForecast() {
    const {cityName} = useParams();
    const weatherInfo = weatherData[cityName];
    const detailsRef = useRef(null);

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <h2>{cityName}</h2>
            <p>{weatherInfo.summary}</p>
            <button onClick={scrollToDetails}>Weather Details</button>
            <div ref={detailsRef}>
            <p>{weatherInfo.details}</p>
            </div>
        </div>

    );
}