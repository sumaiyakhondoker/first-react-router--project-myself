import { useLoaderData} from "react-router-dom";
import Country from "../Country/Country";


const Countries = () => {
    const countries = useLoaderData()
    // console.log(countries);

    return (
        <div >
            <h2>Countries: {countries.length}</h2>
            <div className="box-container">
                {
                    countries.map((country, idx) => <Country key={idx} country ={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;