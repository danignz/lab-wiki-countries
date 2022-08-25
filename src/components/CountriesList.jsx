import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <div className="row">
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((elem) => (
            <Link
              key={elem.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${elem.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`}
                alt={`Pic of ${elem.name.common}`}
              />
              <p>{elem.name.common}</p>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
