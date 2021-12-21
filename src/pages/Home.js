import React, {Fragment} from 'react';

import {Header} from '../components/Header';
import {Gamecard} from '../components/Gamecard';
<<<<<<< HEAD
import {Banner} from '../components/Banner';

import {GamecardContainer} from '../containers/GamecardConatiner';
=======
import {Carrousel} from '../components/Carrousel';
>>>>>>> 750fdc342b305a8327e8d876e58d66597a055de5

const Home = () => {
  return(
    <Fragment>
      <Header/>
<<<<<<< HEAD
      <Banner/>
      <GamecardContainer>
        <Gamecard/>
      </GamecardContainer>
=======
      <Carrousel/>
      {/* <Gamecard/> */}
>>>>>>> 750fdc342b305a8327e8d876e58d66597a055de5
    </Fragment>
  )
};

export {Home};