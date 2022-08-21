import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {!countries && <p>Loading</p>}
              {countries &&
                countries.map((elem) => (
                  <CountriesList key={elem.alpha3Code} country={elem} />
                ))}
            </div>
          </div>
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails arrayCountries={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
