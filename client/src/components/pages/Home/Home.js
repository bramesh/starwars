import React, { Component } from 'react';
import './Home.css';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from '@material-ui/icons/Star';

const styles = {
  home: {
    display: 'flex'
  }

};

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText inset primary="Chelsea Otakan" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Eric Hoffman" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
