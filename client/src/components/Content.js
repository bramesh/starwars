import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

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

  details: {
    alignItems: 'center',
  },
})

class Content extends React.Component {
    render() {
      const { classes } = this.props;
      return(
        <div>
          <Hidden mdUp>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography variant="title" color="primary">
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
                        <Typography variant="title" color="primary">
                          Lauren
                        </Typography>
                        <a href="#">203-470-8539</a><br />
                        <a href="#">lauren.a.shea@gmail.com</a>
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title" color="primary">
                          Evan
                        </Typography>
                        <a href="#">203-470-8539</a><br />
                        <a href="#">lauren.a.shea@gmail.com</a>
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Children
                        </Typography>
                        <Typography variant="title" color="secondary">
                          Shea
                        </Typography>
                        5k
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Children
                        </Typography>
                        <Typography variant="title" color="secondary">
                          Test
                        </Typography>
                        2k
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
                        <Typography variant="title" color="primary">
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
                        <Typography variant="title" color="primary">
                          Lauren
                        </Typography>
                        <a href="#">203-470-8539</a><br />
                        <a href="#">lauren.a.shea@gmail.com</a>
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Parent
                        </Typography>
                        <Typography variant="title" color="primary">
                          Evan
                        </Typography>
                        <a href="#">203-470-8539</a><br />
                        <a href="#">lauren.a.shea@gmail.com</a>
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Children
                        </Typography>
                        <Typography variant="title" color="secondary">
                          Shea
                        </Typography>
                        5k
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.column}>
                        <Typography variant="caption">
                          Children
                        </Typography>
                        <Typography variant="title" color="secondary">
                          Test
                        </Typography>
                        2k
                      </div>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      )
    }
}

export default withStyles(styles)(Content);
