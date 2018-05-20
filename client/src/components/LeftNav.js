import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuList  from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {People, Assignment, Info, AccountBox, Event, Message} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';

import mobileArq from './icons/mobileArq.png';

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
  },
  logo: {
    textAlign: 'center',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  }
})

class LeftNav extends React.Component {
    render() {
      const { classes } = this.props;



      return(
        <div>
          <div className={classes.logo}>
            <img src={mobileArq} alt="MobileArq" />
            <Typography variant="caption">
              Directories +
            </Typography>
          </div>
          <Divider />
          <MenuList>
            <MenuItem to="/" component={NavLink} selected>
              <ListItemIcon color="primary">
                <People />
              </ListItemIcon>
              <ListItemText primary="Families" />
            </MenuItem>
            <MenuItem to="/faculty" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconFaculty}>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Faculty" />
            </MenuItem>
            <MenuItem to="/members" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconMembers}>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Members" />
            </MenuItem>
            <MenuItem to="/schoolinfo" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon className={classes.iconSchoolInfo}>
                <Info />
              </ListItemIcon>
              <ListItemText primary="School Info" />
            </MenuItem>
            <MenuItem to="/eventcalendar" component={NavLink} activeClassName={classes.active} button>
              <ListItemIcon>
                <Event className={classes.iconEvent} />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </MenuItem>
          </MenuList>
        </div>
      )
    }
}

export default withStyles(styles)(LeftNav);
