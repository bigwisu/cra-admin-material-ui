import React from 'react';
import { connect } from 'react-redux';

class Gifs extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Gif\'s' });
  }

  render() {
    return (
      <h1>Gif's</h1>
    );
  }
}

export default connect()(Gifs);
