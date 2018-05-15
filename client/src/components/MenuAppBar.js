import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { FormControl, FormHelperText } from 'material-ui/Form';

import {People, Assignment, Info, AccountBox, DateRange} from '@material-ui/icons';

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from 'material-ui/Paper';


import mobileArq from './icons/mobileArq.png';
import Search from './Search.js';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
    width: '100%',
  },
  logo: {
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
  toolbar: theme.mixins.toolbar,
  textField: {
    width: '100%',
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
    marginTop: '60px',
  },
  contentOptions: {
    textAlign: 'center',
    padding: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    minWidth: 150,
    padding: 10
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
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
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    school: 3,
    class: 1,
    mobileOpen: false
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

  handleClassChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Families" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Faculty" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="School Info" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );


    return (
      <div className={classes.root}>
        <AppBar color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.logo}>
              <img src={mobileArq} alt="MobileArq" />
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
                  <MenuItem onClick={this.handleClose}>Edit Profile</MenuItem>
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
            {drawer}
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
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                spacing={16}
                className={classes.demo}
              >
                <Paper className={classes.paper} elevation={10}>
                  <Grid item>
                    <div className={classes.column}>
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
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="headline">
            Families
          </Typography>
          <Hidden mdUp>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography variant="title">
                    ABRAMS
                  </Typography>
                  47 Oak St<br />
                  Westport, CT 06880
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelDetails className={classes.details}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={16}
                    className={classes.demo}
                  >
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </ExpansionPanelDetails>
              <Divider />
            </ExpansionPanel>
          </Hidden>
          <Hidden smDown implementation="css">
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={16}
                  className={classes.demo}
                >
                  <Paper className={classes.paper}>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="title">
                          ABRAMS
                        </Typography>
                        47 Oak St<br />
                        Westport, CT 06880
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title">
                          Lauren
                        </Typography>
                        203-470-8539<br />
                        lauren.a.shea@gmail.com
                      </div>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </main>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAppBar);
