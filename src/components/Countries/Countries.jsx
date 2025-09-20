import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
            
        <div><h1>Countries of the World : {countries.length}</h1>
        <h4>Total Visited Countries : {visitedCountries.length} </h4>
        <ol>
            {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common} </li>)
            }
        </ol>
        
        <div className='card-container'>
                
                {
                    countries.map(country => <Country 
                        country= {country} 
                        key={country.cca3.cca3}
                        handleVisitedCountries ={handleVisitedCountries} 
                        >
                           
                        </Country> )
                }
            </div>
        </div>
            
        
    );
};

export default Countries;