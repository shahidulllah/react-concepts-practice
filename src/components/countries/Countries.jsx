import { useEffect, useState } from "react";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(``);
        const userData = await response.json();
        setCountry(userData);
        return
      } catch (error) {
        console.error("Error in getUserData:", error);
        return null;
      }
    }
    getCountries();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1>The countris: {country.length}</h1>
    </div>
  );
};

export default Countries;
