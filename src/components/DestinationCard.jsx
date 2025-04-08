// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div style={styles.card}>
      <img src={destination.image} alt={destination.name} style={styles.image} />
      <div style={styles.content}>
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <p style={styles.price}>{destination.price}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    margin: '1rem',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '1rem'
  },
  price: {
    fontWeight: 'bold',
    color: '#007bff'
  }
};

export default DestinationCard;
