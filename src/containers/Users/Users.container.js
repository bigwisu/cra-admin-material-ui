import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Users' });
  }

  render() {
    return (
      <h1>Users Panel</h1>
    );
  }
}

export default connect()(Users);
