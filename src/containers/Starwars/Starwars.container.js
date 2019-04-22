import React from 'react';
import { connect } from 'react-redux';
import Characters from './Characters';

class Starwars extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.dispatch({ type: 'SET_TITLE', payload: 'Starwars' });
  }

  render() {
    return (
      <div>
        <Characters />
      </div>
    );
  }
}

export default connect()(Starwars);
