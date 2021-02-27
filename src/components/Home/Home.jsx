import React from 'react';
import { Link } from 'react-router-dom';
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
        <button className="sign-in">
          <Link to={'/list'}>Přihlásit se</Link>
        </button>
      </div>
    </>
  );
};
