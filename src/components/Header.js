import React, {Fragment} from 'react';
import icons from '../assets/icons/icons';

const Header = () => {

  return(
    <Fragment>
      <header className="container">
        <nav className="row d-flex align-items-center">
          <img className="col-auto" src={icons[0].logo} alt={icons[0].description} />
          <span className='col-auto'>Gamepedia</span>
        </nav>
      </header>
    </Fragment>
  )
};

export {Header};