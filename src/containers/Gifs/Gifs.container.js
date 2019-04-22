import React from 'react';
import { connect } from 'react-redux';
import GifItems from './GifItems';

class Gifs extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.dispatch({ type: 'SET_TITLE', payload: 'GIF\'s' });
  }

  render() {
    return (
      <div>
        <GifItems />
      </div>
    );
  }
}

export default connect()(Gifs);
