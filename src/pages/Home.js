import React, {Fragment} from 'react';

import {Header} from '../components/Header';
import {Gamecard} from '../components/Gamecard';
import {Carrousel} from '../components/Carrousel';

const Home = () => {
  return(
    <Fragment>
      <Header/>
      <Carrousel/>
      {/* <Gamecard/> */}
    </Fragment>
  )
};

export {Home};