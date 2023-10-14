import React from 'react';
import './Card.css';

const Card = ({ticket,user,groupingOption}) => {
  return (
    <div className="card">
      <h2 className='card-key'>{ticket.id}</h2>
      <h2 className="card-title">{ticket.title}</h2>
      <p className="card-tag">{ticket.tag}</p>
    </div>
  );
};

export default Card;
