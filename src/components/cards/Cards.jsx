import React from 'react'
import './Cards.css'


const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = ({overview, title, release_date, poster_path}) => {

  
let clr = (e) => {
  if (e.target.style.color == 'red'){
    e.target.style.color = 'black'
    console.log(this.Cards);
  } else {
  e.target.style.color = 'red'
  }
}

  return (
    <div>
        <div className="cardInfo">
            <img src={Poster(poster_path)} alt="poster" />
            <p>{title}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
        <i class="fa-solid fa-heart icon" onClick={clr}></i>
    </div>
  )
}

export default Cards