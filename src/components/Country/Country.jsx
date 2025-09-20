import React, { useState } from "react";

const Country = ({ country,handleVisitedCountries }) => {

    // console.log(country)
  const countryArea =country.area.area;
  const countryFlags = country.flags.flags.png;
  const countryName = country.name.common;
  const countyPopulation = country.population.population;

  const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //By ternary conditional
        // setVisited(visited ? false:true)

        //third system
        setVisited(!visited)
        handleVisitedCountries(country)
        
    }
  return (
    <div className={`card ${visited && 'country-visited'} `}>
      
      <img src={countryFlags} alt="" />
      <h3>Name: {countryName}</h3>
      <p>Population : {countyPopulation} </p>
      <p>Area: {countryArea}</p>
      <button onClick={handleVisited}> {visited ? 'Visited': 'Not Visited'}
      </button>
    </div>
  );
};

export default Country;
