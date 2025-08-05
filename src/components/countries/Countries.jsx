import { useEffect, useState } from "react";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1>The countris: {country.length}</h1>
    </div>
  );
};

export default Countries;
