import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



class Movie extends Component {
    addToCatalog = () => {
        this.props.addToCatalog(this.props.movie)
    }

    render() {
        const element = <FontAwesomeIcon icon={faCoffee} />
        let catalog = this.props.catalog
        let status = catalog.isRented ? '-' : "+"
        return (
            <div class="self-movie">
                <Link to={'/Catalog/movies/'+ catalog.title}><img src={catalog.img} alt="image"></img></Link>
                <div class="centered" onClick={this.addToCatalog}>{status}</div>
            </div>
        )
    }
}

export default Movie;