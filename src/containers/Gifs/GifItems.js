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

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
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
        this.setState(() => ({ data: response.data.data }));
      })
      .catch(error => console.error(error));
  }

  handleClick(id) {
    const { data } = this.state;
    const idx = data.findIndex(img => img.id === id);

    const obj = data[idx];
    const selectedObj = {
      id: obj.id,
      images: {
        fixed_height_still: {
          url: obj.images.fixed_height.url
        },
        fixed_height: {
          url: obj.images.fixed_height_still.url
        }
      }
    };

    data.splice(idx, 1, selectedObj);
    this.setState(() => ({ data }));
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {data.map(n => (
            <Grid key={n.id} item xs={3}>
              <Paper className={classes.paper}>
                <ButtonBase className={classes.image} onClick={this.handleClick.bind(this, n.id)}>
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
