import React from 'react';
import './home.css';

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-description">
          <h1>EasyTrip</h1>
          <p>
            Naplánujte si svůj další výlet krok po kroku a mějte všechny
            potřebné informace vždy po ruce!
          </p>
        </div>
        <button className="sign-in">Přihlásit se</button>
      </div>
    </>
  );
};
