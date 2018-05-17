import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {People, Assignment, Info, AccountBox, Event, Message} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom'

const styles = theme => ({
  iconFaculty: {
    color: '#FF5722'
  },
  iconMembers: {
    color: '#4CAF50'
  },
  iconSchoolInfo: {
    color: '#9C27B0'
  },
  iconEvent: {
    color: '#3F51B5'
  },
  active: {
    color: 'red',
    fontWeight: 'bold'
  }
})

class LeftNav extends React.Component {
    render() {
      const { classes } = this.props;



      return(
        <div>
          <List component="nav">
            <ListItem to="/" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon color="primary">
                <People />
              </ListItemIcon>
              <ListItemText primary="Families" />
            </ListItem>
            <ListItem to="/faculty" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconFaculty}>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Faculty" />
            </ListItem>
            <ListItem to="/members" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconMembers}>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Members" />
            </ListItem>
            <ListItem to="/schoolinfo" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconSchoolInfo}>
                <Info />
              </ListItemIcon>
              <ListItemText primary="School Info" />
            </ListItem>
            <ListItem to="/eventcalendar" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon>
                <Event className={classes.iconEvent} />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
          </List>
          <Divider />
        </div>
      )
    }
}

export default withStyles(styles)(LeftNav);
