import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SampleChart from '../Sample/SimpleLineChart';
import SampleTable from '../Sample/SimpleTable';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SET_TITLE', payload: 'Dashboard' });
  }

  render() {
    return (
      <React.Fragment>
        <SampleChart />
        <SampleTable />
      </React.Fragment>
    );
  }
}

export default connect()(Dashboard);
