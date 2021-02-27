import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import database from '../../database.js';

export const Itinerary = (props) => {
  const id = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    database.itemList(id).then((json) => setItems(json));
  });

  return (
    <div className="itinerary-card">
      <h2>{props.nazev}</h2>
      <ul>
        {items.map((item) => {
          <ItineraryItem {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
