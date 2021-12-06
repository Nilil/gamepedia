import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

const Header = () => {

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

        <section key={ans.id}>
          <p>{ans.title}</p>
          <h3>{ans.genre}</h3>
        </section>

      ))}
    </Fragment>
  )
};

export {Header};