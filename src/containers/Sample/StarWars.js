import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id, name, calories, fat, carbs, protein
  };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class StarWars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
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
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then((rData) => {
        this.setState((state, props) => ({ data: rData.results }));
      })
      .catch(error => console.error(error));
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { console.log('starwars', this.state.data) }
            {this.state.data.map(n => (
              <TableRow key={n.id}>
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

StarWars.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(StarWars);
