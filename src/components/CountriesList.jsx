import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );

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
              <Link to={`/${alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                  alt={`The flag of ${name.common}`}
                />
                <p>{name.common}</p>
              </Link>
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
