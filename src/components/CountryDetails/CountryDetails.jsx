import {  useLoaderData, useNavigate } from "react-router-dom";
import './CountryDetails.css'

const CountryDetails = () => {
    const countryDetails = useLoaderData()
    const navigate = useNavigate()
    // console.log(countryDetails);
    const [country]  = countryDetails
    const {name,capital, population,startOfWeek,region, area} = country

    const handleGoBack= ()=>{
        navigate(-1)
    }
    return (
        <div className="details-box">
            
           <h2>{name.common}</h2>
           <p>Capital: {capital}</p>
           <p>Population: {population}</p>
         
           
            <p>Region: {region}</p>
            <p>Start of week: {startOfWeek}</p>
            <p>Area: {area}</p>
           <button className="details-btn" onClick={handleGoBack}>Go Back</button>
            
           
            
        </div>
    );
};

export default CountryDetails;