import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <div className="card">
        <h1 className="card__title">ADVICE #117</h1>
        <div className="card__advice">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </div>
        <img
          src={require('../images/pattern-divider-desktop.svg')}
          alt="pattern divider desktop"
          className="card__divider-desktop"
        />
        <div className="card__icon-container">
          <img
            src={require('../images/icon-dice.svg')}
            width="24px"
            height="24px"
            alt="icon dice"
            className="card__icon-container_icon-dice"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
