import React from 'react'
import './Cards.css'
const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = ({overview, title, release_date, poster_path}) => {

  return (
    <div className='parent'>
        <div className="cardInfo">
            <img src={Poster(poster_path)} alt="poster" />
            <div className="card-text">
              <p>{title}</p>
              <p>{overview}</p>
              <p>{release_date}</p>
            </div>
        </div>
        <i></i>
    </div>
  )
}

export default Cards