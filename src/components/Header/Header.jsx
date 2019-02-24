import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';

const Header = ({ classes, title, notif }) => (
  <React.Fragment>
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      className={classes.title}
    >
      {title}
    </Typography>
    <IconButton color="inherit">
      <Badge badgeContent={notif > 0 ? notif : null} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  </React.Fragment>
);

Header.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  notif: PropTypes.number.isRequired
};

export default connect(state => state)(Header);
