import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div class="col-7">
      {country ? (
        <>
          <img
            src={`https://flagpedia.net//data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt={`The flag of ${country.name.common}`}
          />
          <h1>{country.name.common}</h1>
          <table className={'table'}>
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                {country.borders.length && (
                  <>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {country.borders.map((border) => (
                          <li key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
}

export default CountryDetails;
