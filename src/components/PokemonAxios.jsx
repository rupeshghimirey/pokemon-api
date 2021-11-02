import axios from 'axios';
import react, { useState } from 'react';
import React from 'react';

const PokemonAxios = () => {

    const[listOfPokemons, setListOfPokemons] = useState([])

    const showPokemons=(e)=> {

        axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
        console.log(response);
        setListOfPokemons(response.data.results)
        console.log("Pokemons list",listOfPokemons.data.results);
        console.log(`count==> ${listOfPokemons.data.count}`)
        }).catch(err=>{
            console.log(err);
        });
        
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center text-info mt-3">List of all the names of Pokemon Using Axios!</h1>
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

export default PokemonAxios;