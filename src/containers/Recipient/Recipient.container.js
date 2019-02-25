import React from 'react';
import { connect } from 'react-redux';

class Recipient extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Recipient' });
  }

  render() {
    return (
      <h1>Penerima</h1>
    );
  }
}

export default connect()(Recipient);
