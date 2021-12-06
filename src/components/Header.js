import React, {useState} from 'react';
import axios from 'axios';

const Header = () => {

  const[answer, setAnswer] = useState([]);

  axios.get('https://pokeapi.co/api/v2/pokemon/1')
  // axios.get('https://www.freetogame.com/api/games')
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))

  return(
    <header>
      <h2>Soy el Header</h2>
    </header>
  )
};

export {Header};