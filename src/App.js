import React, { useEffect } from 'react';
import "./App.css";
import SearchIcon from './search.svg';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
		'X-RapidAPI-Key': 'c2791b8444msh467504530d45f34p10db09jsn1f6ecc734be5'
	}
};

const API_URL = fetch('https://imdb-data-searching.p.rapidapi.com/om?t=batman', options)
                    .then(response => response.json())
                    .then(response => console.log(response))
                    .catch(err => console.error(err));

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        // const data = await response.json();

        // console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='App'>
            <h1>filmy</h1>

            <div className='search'>
                <input 
                    placeholder='Search for movies' 
                    value='Superman'
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img 
                            src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                            alt={movie1.Title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;