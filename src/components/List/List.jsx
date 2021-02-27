import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import database from '../../database.js';

export const List = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    database.itineraryList().then((json) => setTrips(json));
  }, []);

  return (
    <main className="list">
      <h1>Moje výlety</h1>
      <div className="trips-container"></div>
      {trips.map((trip) => (
        <div className="trip-card">
          <Link to={`itinerary/${trip.id}`}>{trip.nazev} </Link>
        </div>
      ))}
    </main>
  );
};
