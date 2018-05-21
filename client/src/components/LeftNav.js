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
    fontWeight: 'bold'
  },
  logo: {
    textAlign: 'center',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  }
})

class LeftNavLink extends React.Component {
  render() {
    const {
      label,
      icon,
      to,
      activeOnlyWhenExact
    } = this.props;
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <MenuItem component={NavLink} to={to} button selected={(match && match.isExact)}>
            {this.props.icon()}
            <ListItemText primary={label} />
          </MenuItem>
        )}
      />
    )
  }
}

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
            <LeftNavLink label="Families" to="/" activeOnlyWhenExact={true} icon={() => (
              <ListItemIcon color="primary">
                <People />
              </ListItemIcon>
            )} />
            <LeftNavLink label="Faculty" to="/faculty" activeOnlyWhenExact={true} icon={() => (
              <ListItemIcon className={classes.iconFaculty}>
                <Assignment />
              </ListItemIcon>
            )} />
            <LeftNavLink label="Members" to="/members" activeOnlyWhenExact={true} icon={() => (
              <ListItemIcon className={classes.iconMembers}>
                <Assignment />
              </ListItemIcon>
            )} />
            <LeftNavLink label="School Info" to="/schoolinfo" activeOnlyWhenExact={true} icon={() => (
              <ListItemIcon className={classes.iconSchoolInfo}>
                <Info />
              </ListItemIcon>
            )} />
            <LeftNavLink label="Calendar" to="/eventcalendar" activeOnlyWhenExact={true} icon={() => (
              <ListItemIcon className={classes.iconEvent}>
                <Event />
              </ListItemIcon>
            )} />
          </MenuList>
        </div>
      )
    }
}

export default withStyles(styles)(LeftNav);
