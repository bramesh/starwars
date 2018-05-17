import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import Search from './Search.js';

const styles = theme => ({
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
})

class ContentHeader extends React.Component {
    state = {
      school: 3,
      class: 1,
    }
    render() {
      const { classes } = this.props;

      const FamilyHeader = (
        <Paper className={classes.paper} elevation={10}>
          <Grid item>
            <div className={classes.column}>
              <Search />
            </div>
          </Grid>
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
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch aria-label="LoginSwitch" color="primary" />
                }
                label={'Show only children'}
              />
            </FormGroup>
          </Grid>
        </Paper>
      )

      const {
        title
      } = this.props;

      return(
        <div>
          <Typography variant="display1">
            {title}
          </Typography>

          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                spacing={16}
                className={classes.demo}
              >
                {(title === 'Families') ? FamilyHeader : null}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    }
}

export default withStyles(styles)(ContentHeader);
