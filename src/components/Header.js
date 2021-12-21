import React, {Fragment} from 'react';
import icons from '../assets/icons/icons';

const Header = () => {

  return(
    <Fragment>
      <header className="container">
        <nav className="row d-flex align-items-center">
          <img className="col-auto" src={icons[0].logo} alt={icons[0].description} />
<<<<<<< HEAD
          <span className='col-auto'>Gamepedia</span>
=======
          <a className="col-auto">Gamepedia</a>
>>>>>>> 750fdc342b305a8327e8d876e58d66597a055de5
        </nav>
      </header>
    </Fragment>
  )
};

export {Header};