import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2 className="title">Contador</h2>
      <p className="count">El valor actual es: {count}</p>
      <button className="button" onClick={increment}>Incrementar</button>
      <button className="reset-button" onClick={reset}>Resetear</button>

      {/* Styles */}
      <style jsx>{`
        .container {
          max-width: 300px;
          margin: 0 auto;
          text-align: center;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .count {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .button,
        .reset-button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 5px;
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .button:hover,
        .reset-button:hover {
          background-color: #388e3c;
        }

        .reset-button {
          background-color: #f44336;
        }

        .reset-button:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default Counter;
