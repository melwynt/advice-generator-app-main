import React, { useState, useEffect } from 'react';

const App = () => {
  const [advice, setAdvice] = useState(null);

  const getData = async () => {
    fetch('https://api.adviceslip.com/advice/117')
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          console.log('Not successful');
        }
      })
      .then((res) => {
        console.log(res);
        setAdvice(res.slip);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="card">
        <h1 className="card__title">ADVICE #{advice ? advice.id : ''}</h1>
        <div className="card__advice">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
          {/* {advice ? advice.advice : ''} */}
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
