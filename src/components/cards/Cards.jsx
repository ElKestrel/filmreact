import React from 'react'

const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = ({overview, title, release_date, poster_path}) => {

  return (
    <div>
        <div className="cardInfo">
            <img src={Poster(poster_path)} alt="poster" />
            <p>{title}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
        <i>btn</i>
    </div>
  )
}

export default Cards