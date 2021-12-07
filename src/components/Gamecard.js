import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

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

        <div className="card" key={ans.id} style={{width: '18rem'}}>
          <img src={ans.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ans.title}</h5>
            <p className="card-text">{ans.short_description}</p>
            <a href="{ans.game_url}" className="btn btn-primary">Link</a>
          </div>
        </div>



      ))}
    </Fragment>
  )
};

export {Gamecard};