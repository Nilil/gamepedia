import React, {Fragment} from 'react';

const GamecardContainer = ({children}) => {
  return(
    <Fragment>
      <h2>Lista de juegos</h2>
      <main className="container">
        <div className="row">
          {children}
        </div>
      </main>
    </Fragment>
  )
};

export {GamecardContainer};