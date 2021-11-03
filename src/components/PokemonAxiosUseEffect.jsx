import axios from "axios";
import react, { useEffect, useState } from "react";
import React from "react";

const PokemonAxiosUseEffect = () => {
    const [listOfPokemons, setListOfPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((response) => {
                console.log(response);
                setListOfPokemons(response.data.results);
                console.log("Pokemons list", listOfPokemons.data.results);
                console.log(`count==> ${listOfPokemons.data.count}`);
            })
            .catch((err) => {
                console.log(err);
        });
    }, []);

    console.log("Wazzaaaa")
    return (
        <>
            <div className="container">
                <h1 className="text-center text-info mt-3">
                    List of all the names of Pokemon Using Axios!
                </h1>
                {listOfPokemons.map((eachPokemon, i) => {
                    return (
                        <div key={i}>
                            <h2 className="text-center text-primary mt-1">
                                {eachPokemon.name}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PokemonAxiosUseEffect;
