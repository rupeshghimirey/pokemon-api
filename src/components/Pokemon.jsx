import react, { useState } from 'react';
import React from 'react';

const Pokemon = () => {

    const[listOfPokemons, setListOfPokemons] = useState([])

    const showPokemons=(e)=> {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            
            setListOfPokemons(response.results)
            console.log("Pokemons list",listOfPokemons.results);
        }).catch(err=>{
            console.log(err);
        });
    }
    console.log(`count==> ${listOfPokemons.count}`)

    return (
        <>
            <div className="container">
                <h1 className="text-center text-info mt-3">List of all the names of Pokemon!</h1>
                <button onClick={showPokemons} className="btn btn-dark text-center col-lg-2 offset-lg-5 mt-2">Show All Pokemons</button>
                {
                    listOfPokemons.map((eachPokemon,i) =>{
                        return(
                            <div key={i}>
                                <h2 className="text-center text-primary mt-1">{eachPokemon.name}</h2>

                            </div>
                        )
                    })
                }
            </div>
            
        </>
        
    );
};



export default Pokemon;