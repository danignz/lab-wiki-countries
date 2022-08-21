import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({ country }) {
  return (
    <Link
      className="list-group-item list-group-item-action"
      to={`/${country.alpha3Code}`}
    >
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`Pic of ${country.name.common}`}
      />
      <p>{country.name.common}</p>
    </Link>
  );
}
