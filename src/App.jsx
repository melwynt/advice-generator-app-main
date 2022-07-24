import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState(null);

  const getData = async () => {
    const url = 'https://api.adviceslip.com/advice';

    const data = await axios.get(`${url}?timestamp=${new Date().getTime()}`);

    setAdvice(data.data.slip);
  };

  useEffect(() => {
    // getData();
    setAdvice({
      id: '117',
      advice: `It is easy to sit up and take notice, what's difficult is getting up and taking actions.`,
    });
  }, []);

  return (
    <main>
      <div className="card">
        <h1 className="card__title">ADVICE #{advice && advice.id}</h1>
        <div className="card__advice">{advice && advice.advice}</div>
        <img alt="divider" className="card__divider" />
        <div
          className="card__icon-container"
          onClick={() => {
            getData();
          }}
        >
          <img
            src="/images/icon-dice.svg"
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
