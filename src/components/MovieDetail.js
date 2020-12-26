import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        let movieName = this.props.match.params.movie
        let MovieDetails = this.props.state.catalog.filter(c => c.title === movieName)
        return (
            <div className='movie-details'>
                <div>
                <h1>{movieName}</h1>
                <h3>{MovieDetails[0].year}</h3>
                <h2>{MovieDetails[0].descrShort}</h2>
                </div>
                <div className='img-detail'>
                <img src={MovieDetails[0].img}></img>
                </div>
            </div>)
    }

}

export default MovieDetail;