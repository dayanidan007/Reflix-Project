import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    let names = this.props.state.names
    return (
      <div className='landing-container'>
        <div className='users-container'>
          {names.map(f => {
            return (
              <Link to={'/Catalog/' + f.name}>
                <div className="userBox">
                  <span>{f.name}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div >
    )
  }
}

export default Landing;