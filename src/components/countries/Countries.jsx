import { useEffect, useState } from "react";

const Countries = () => {
    const [country, setCountry] = useState([])

    useEffect(()=> {
        fetch("https://www.apicountries.com/countries")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>The countris: </h1>
        </div>
    );
};

export default Countries;