import React from 'react';
import { connect } from 'react-redux';

class Donor extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Donor' });
  }

  render() {
    return (
      <h1>Donatur</h1>
    );
  }
}

export default connect()(Donor);
