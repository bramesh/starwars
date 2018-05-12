import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { FormControl, FormHelperText } from 'material-ui/Form';

import mobileArq from './icons/mobileArq.png';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },

};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    school: 3
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSchoolChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <img src={mobileArq} alt="MobileArq" />
            </Typography>
            {auth && (
              <div>
                <FormControl>
                  <InputLabel htmlFor="school-simple">School</InputLabel>
                  <Select
                    value={this.state.school}
                    onChange={this.handleSchoolChange}
                    inputProps={{
                      name: 'school',
                      id: 'school-simple',
                    }}
                    autoWidth
                  >
                    <MenuItem value={1}>Coleytown Elementary School</MenuItem>
                    <MenuItem value={2}>Greens Farms Elementary School</MenuItem>
                    <MenuItem value={3}>Kings Highway Elementary School</MenuItem>
                    <MenuItem value={4}>Long lots Elementary School</MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
