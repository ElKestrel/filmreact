import React from 'react'
import './Cards.css'

const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = ({overview, title, release_date, poster_path}) => {


  
let clr = (e) => {
  if (e.target.style.color == 'red'){
    e.target.style.color = '#ffffff'
  } else {
  e.target.style.color = 'red'
  }
}
  return (
    <div className='parent'>
        <div className="cardInfo">
            <img src={Poster(poster_path)} alt="poster" />
            <div className="card-text">
              <p>{title}</p>
              <p>{overview}</p>
              <p>{release_date}</p>
              <i class="fa-solid fa-heart icon" onClick={clr}></i>

            </div>
        </div>
        

    </div>
  )
}

export default Cards