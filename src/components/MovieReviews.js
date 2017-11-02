// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {
  const x = reviews.map(review => (
      <div className="review">
        <h3>{review.display_title}</h3>
        <p>{review.summary_short}</p>
      </div>
  ))

  return (
    <div className="review-list">
      {x}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
