import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/recipient">
      <ListItemIcon>
        <AccessibilityNew />
      </ListItemIcon>
      <ListItemText primary="Recipient" />
    </ListItem>
    <ListItem button component={Link} to="/donor">
      <ListItemIcon>
        <SentimentSatisfiedAlt />
      </ListItemIcon>
      <ListItemText primary="Donor" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Area" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ViewColumn />
      </ListItemIcon>
      <ListItemText primary="Activity" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItem>
  </div>
);

export const adminListItems = (
  <div>
    <ListSubheader inset>Admin</ListSubheader>
    <ListItem button component={Link} to="/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
  </div>
);
