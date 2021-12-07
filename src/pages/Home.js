import React, {Fragment} from 'react';

import {Header} from '../components/Header';
import {Gamecard} from '../components/Gamecard';
import {Banner} from '../components/Banner';

import {GamecardContainer} from '../containers/GamecardConatiner';

const Home = () => {
  return(
    <Fragment>
      <Header/>
      <Banner/>
      <GamecardContainer>
        <Gamecard/>
      </GamecardContainer>
    </Fragment>
  )
};

export {Home};