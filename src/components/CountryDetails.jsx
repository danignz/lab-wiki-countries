import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CountryDetails({ arrayCountries }) {
  const { id } = useParams();
  const [countryData, setcountryData] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${id}`
        );
        setcountryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, [id]);

  return (
    <div className="col-7">
      {countryData && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/256x192/${countryData.alpha2Code.toLowerCase()}.png`}
            alt={`Pic of ${countryData.name.common}`}
          />
          <h1>{countryData.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryData.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryData.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul className="styleLink">
                    {countryData.borders.length > 0 &&
                      countryData.borders.map((border, index) => {
                        const countryName = arrayCountries.find(
                          (element) => element.alpha3Code === border
                        );
                        return (
                          <li key={index}>
                            <Link to={`/${border}`}>
                              {countryName.name.common}
                            </Link>
                          </li>
                        );
                      })}
                    {countryData.borders.length === 0 && (
                      <li>
                        <p>None</p>
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {!countryData && <p>Country not found</p>}
    </div>
  );
}
