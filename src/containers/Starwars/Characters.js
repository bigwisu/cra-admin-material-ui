import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { uid } from 'react-uid';
import axios from 'axios';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

class StarwarsCharacters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        id: 0,
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        skin_color: ''
      }],
      isLoading: true
    };
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    axios.get(url)
      .then((response) => {
        this.setState(() => ({ data: response.data.results }));
      })
      .catch(error => console.error(error));
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Skin Color</TableCell>
              <TableCell align="right">Hair Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={uid(n)}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell align="right">{n.height}</TableCell>
                <TableCell align="right">{n.mass}</TableCell>
                <TableCell align="right">{n.hair_color}</TableCell>
                <TableCell align="right">{n.skin_color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

StarwarsCharacters.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(StarwarsCharacters);
