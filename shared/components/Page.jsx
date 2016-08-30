import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tested routing and hot reloading</h1>
        <Link to="/">
          home
        </Link>
      </div>
    );
  }
}
