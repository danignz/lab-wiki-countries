import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
            <Route path="/" element={countries ? <CountriesList countries={countries} /> : <p>Loading</p>}>
                <Route path="/:id" element={<CountryDetails arrayCountries={countries} />} />
            </Route>
        </Routes>
     </div>
    </div>
  );
}
export default App;
