import React, { useEffect, useState } from 'react';
import MovieBox from "./MovieBox";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9962250b5b92e693f0fb7b0cd065e8cb";

function Product() {
    const [moviesBox, setMoviesBox] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMoviesBox(data.results);
            });
    }, []);

    return (
        <div className="container">
          <div className='grid'>
          {moviesBox.map(movieReq => (
                <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
            
        </div>
    );
}

export default Product;

