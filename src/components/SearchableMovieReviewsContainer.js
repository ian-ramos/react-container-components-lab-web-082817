// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  fetchMovies = () => {
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + `this.state.searchTerm`
                + `api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({reviews: json.results})
      })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchMovies()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
