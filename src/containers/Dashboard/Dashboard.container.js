import React from 'react';
import { connect } from 'react-redux';

import SampleChart from '../Sample/SimpleLineChart';
import SampleTable from '../Sample/SimpleTable';

class Dashboard extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.dispatch({ type: 'SET_TITLE', payload: 'Dashboard' });
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
