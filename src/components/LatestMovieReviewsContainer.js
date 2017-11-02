import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  fetchMovies = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({reviews: json.results})
      })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.fetchMovies()
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <button onClick={this.handleClick}>Get Latest Reviews</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
