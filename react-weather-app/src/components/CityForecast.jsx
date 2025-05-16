import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import weather from "../public/data.json" 

export default function CityForecast() {
    const {cityName} = useParams();
    const [weather, setWeather] = useState(null);
    const detailsRef = useRef(null);


    useEffect(() => {
        fetch(`\data.json`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }, [cityName]);    

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <h2>{cityName}</h2>
            <p>{weather.summary}</p>
            <button onClick={scrollToDetails}>Weather Details</button>
            <div ref={detailsRef}>
            <p>{weather.details}</p>
            </div>
        </div>

    );
}

