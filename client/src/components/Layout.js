import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';


import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import Search from './Search.js';

import {BrowserRouter as Router, NavLink} from 'react-router-dom'


import LeftNav from './LeftNav';
import Content from './Content.js';
import Floater from './Floater.js';
import withRoot from './withRoot';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
    width: '100%',
  },
  title: {
    flex: 1
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: 40,
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    padding: 20,
    marginTop: theme.spacing.unit * 3,
    marginBottom: 20
  },

  column: {
    minWidth: 150,
    padding: 10
  },
});

class Layout extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    mobileOpen: false,
    school: 'Coleytown Elementary',
    class: 1,
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

  handleClassChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleSchoolChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes, type } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const ContentHeader = (
      <Paper className={classes.paper} elevation={10}>
        <Grid item>
          <div className={classes.column}>
            <FormControl>
              <InputLabel htmlFor="school-simple">School</InputLabel>
              <Select
                value={this.state.school}
                onChange={this.handleSchoolChange}
                input={<Input id="school-simple" name="school" />}
                autoWidth
              >
                <MenuItem value="Coleytown Elementary">Coleytown Elementary</MenuItem>
                <MenuItem value="Greens Farms Elementary">Greens Farms Elementary</MenuItem>
                <MenuItem value="Kings Highway Elementary">Kings Highway Elementary</MenuItem>
                <MenuItem value="Long Lots Elementary">Long Lots Elementary</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.column}>
            <FormControl>
              <InputLabel htmlFor="class-simple">Class</InputLabel>
              <Select
                value={this.state.class}
                onChange={this.handleClassChange}
                inputProps={{
                  name: 'class',
                  id: 'class-simple',
                }}
                autoWidth
              >
                <MenuItem value={1}>1k</MenuItem>
                <MenuItem value={2}>2k</MenuItem>
                <MenuItem value={3}>3k</MenuItem>
                <MenuItem value={4}>4k</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.column}>
            <Search />
          </div>
        </Grid>
      </Paper>
    )

    return (
      <div>
        <div className={classes.root}>
          <AppBar color="primary" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open Left Navigation"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.title}>
                {this.state.school}
              </Typography>
              {auth && (
                <div>
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
                    <MenuItem to="/editprofile" component={NavLink} onClick={this.handleClose}>Edit Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <LeftNav />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <LeftNav />
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            {(type === 'school') ? ContentHeader : null}
            {this.props.render()}
          </main>
        </div>
        <Floater />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

Layout.defaultProps = {
  type: 'school'
};
export default withRoot(withStyles(styles)(Layout));
