import React from 'react'

import './Divs.css'

import { useEffect, useState } from 'react';
import tmdb from '../../api/tmdb';
import Cards from '../cards/Cards'

const Divs = () => {
    const [moviePopular, setMoviePopular]= useState([]);

    useEffect( () => {
    const fetchMovies = async() => {
        const {data} = await tmdb.get("movie/popular")
        setMoviePopular(data.results)
    }
 
 fetchMovies()
    }, [] )
  return (

    <div className='apparence'>
        {moviePopular.map( (movie , index ) =>{
            return <Cards key={index} {...movie}  /> 
        })}
    </div>
  )
}

export default Divs