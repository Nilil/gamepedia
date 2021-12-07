import React from 'react';
import icons from '../assets/icons/icons';

const Banner = () => {
  return(
   <section className='container'>
    <picture className='d-flex align-items-center justify-content-around'>
      <img src={icons[0].logo} alt=""/>
      <img src={icons[0].logo} alt=""/>
      <img src={icons[0].logo} alt=""/>
    </picture>
   </section>
  )
};

export {Banner};