import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItineraryItem } from '../ItineraryItem/ItineraryItem.jsx';
import database from '../../database.js';
import './itinerary.css';

export const Itinerary = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    database.itemList(id).then((json) => setItems(json));
    database.itineraryDetail(id).then((json) => setName(json.nazev));
  }, []);

  return (
    <div className="itinerary-card">
      <h2>{name}</h2>
      <ul>
        {items.map((item) => (
          <ItineraryItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
