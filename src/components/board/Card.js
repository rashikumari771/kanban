// src/components/Card.js
import React from 'react';
import './Card.css'; // Add CSS for styling

const Card = ({ ticket, user, groupByOption }) => {
  return (
    <div className="Card">
      <div className="CardHeader">
        <h4>{ticket.title}</h4>
        <div className="User">
          <span>Assigned To: {user.name}</span>
        </div>
      </div>
      <div className="CardContent">
        <p>Status: {ticket.status}</p>
        <p>Priority: {ticket.priority}</p>
        {/* Display additional information based on the groupByOption */}
        {groupByOption === 'Status' && <p>Description: {ticket.description}</p>}
        {groupByOption === 'User' && <p>Email: {user.email}</p>}
      </div>
    </div>
  );
};

export default Card;
