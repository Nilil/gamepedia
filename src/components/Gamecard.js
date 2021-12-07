import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import '../scss/gamecard.scss'

const Gamecard = () => {

  const[answer, setAnswer] = useState([]);

  useEffect(() => {
    axios.get('https://www.freetogame.com/api/games')
    .then(res => {
      setAnswer(res.data)
    })
    .catch(err => console.error(err))
  },[])

  console.log(answer)

  return(
    <Fragment>
      {answer.map(ans => (

        <div className="card
        col-11 col-sm-5 col-lg-4 col-xl-3
        m-3"
         key={ans.id} >
         <a href={ans.game_url}>
          <img src={ans.thumbnail} className="card-img-top" alt={ans.title} />
          <div className="card-body">
            <h5 className="card-title">{ans.title}</h5>
            <p className="card-text">{ans.short_description}</p>
            <div className="d-flex justify-content-around my-3">
              <span className="badge bg-primary">{ans.genre}</span>
              <span className="badge bg-primary">{ans.platform}</span>
            </div>
            {/* <div class="d-grid col-7 mx-auto my-2">
              <a href={ans.game_url} className="btn btn-secondary">Site</a>
            </div> */}
          </div>
        </a>
        </div>



      ))}
    </Fragment>
  )
};

export {Gamecard};