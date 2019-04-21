
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const key = 'FKFXYjSDcMw06kAjvkYVs1YHEbBOFyoC';
const rating = 'PG-13';
const limit = 28;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 500,
  },
  image: {
    width: 220,
    height: 220,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
});

class GifItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        id: 0,
        images: {
          fixed_height_still: {
            url: ''
          },
          fixed_height: {
            url: ''
          }
        }
      }]
    };
  }

  componentDidMount() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}&rating=${rating}`;

    axios.get(url)
      .then((response) => {
        console.log(response.data.data);
        this.setState((state, props) => ({ data: response.data.data }));
      })
      .catch(error => console.error(error));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.state.data.map(n => (
            <Grid key={n.id} item xs={3}>
              <Paper className={classes.paper}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={n.images.fixed_height_still.url} />
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

GifItems.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(GifItems);
