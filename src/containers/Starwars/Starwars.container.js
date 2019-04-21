import React from 'react';
import { connect } from 'react-redux';

class Starwars extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Starwars' });
  }

  render() {
    return (
      <h1>Starwars</h1>
    );
  }
}

export default connect()(Starwars);
