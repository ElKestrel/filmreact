import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='case'>
      <div className='flexo'>
          <div className='tit'>ATAFLIX</div>
          <div className='fav'>Mes favoris</div>
      </div>
        <div className='flex'>
          <input className='barre' placeholder='Recherhez votre film préféré..'></input>
          <button className='barre2'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
  )
}

export default Nav