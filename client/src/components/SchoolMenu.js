import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const options = [
  'Coleytown Elementary School',
  'Greens Farms Elementary School',
  'Kings Highway Elementary School',
  'Long lots Elementary School',
  'Saugatuck Elementary School',
  'Bedford Elementary School',
  'Coleytown Middle School',
  'Greens Farms Middle School',
  'Kings Highway Middle School',
  'Long lots Middle School',
  'Saugatuck Middle School',
  'Bedford Middle School',
];

class SchoolMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 1,
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Change School"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary=""
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SchoolMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolMenu);
