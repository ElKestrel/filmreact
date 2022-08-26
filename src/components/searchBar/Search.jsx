import React, {useState} from 'react'
import tmdb from '../../api/tmdb    '

function Search() {
    const [searchTerm, setsearchTerm] = useState("")
    let [data] = {...tmdb}
    console.log();
  return (
    <div>
        <div className="templateContainer">
            <div className="searchInput_container">
                <input id="searchInput" type='text' placeholder='ata choisit le film' onChange={(event)=>{
                    setsearchTerm(event.target.value);
                }} />
            </div>
            <div className="template_container">
                {
                    data.filter((val) => {
                        if(searchTerm == ""){
                            return val;
                        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Search