import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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




    render() {




      

      const {
        type,
      } = this.props;

      return(
        <div>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                spacing={16}
                className={classes.demo}
              >
                {(type === 'Families') ? FamilyHeader : null}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    }
}

export default withStyles(styles)(ContentHeader);
