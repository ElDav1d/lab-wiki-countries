import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      console.log(response.data[0].name);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3>Countries List</h3>
      {countries.length ? (
        <ul>
          {countries.map(({ name, alpha2Code, alpha3Code }) => (
            <li key={alpha3Code}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={`The flag of ${name.common}`}
              />
              <p>{name.common}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>...loading</h3>
      )}
    </div>
  );
}

export default CountriesList;
