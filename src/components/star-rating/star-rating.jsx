import React from 'react';
import styles from './star-rating.module.css';

const StarRating = ({ rating }) => {
  const getRating = () => {
    if (rating > 5) {
      return 5;
    } else if (rating < 0) {
      return 0
    } else {
      return rating;
    }
  }
  return <i data-star={getRating(rating)} />
};

export default StarRating;