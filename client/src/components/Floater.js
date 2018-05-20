import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Message} from '@material-ui/icons';

const styles = theme => ({
  floater: {
    position: 'fixed',
    bottom: 20,
    left: 20,
    zIndex: 2000
  },
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Floater extends React.Component {
    state = {
      modalOpen: false
    }

    handleModalOpen = () => {
      this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
      this.setState({ modalOpen: false });
    };

    render() {
      const { classes } = this.props;
      const {modalOpen} = this.state;
      return(
        <div className={classes.floater}>
          <Tooltip id="tooltip-fab" title="Send Message">
            <Button variant="fab" color="primary" aria-label="Send Message" onClick={this.handleModalOpen}>
              <Message />
            </Button>
          </Tooltip>
          <Dialog
            fullScreen
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
            TransitionComponent={Transition}
          >
          <DialogTitle>Send Group Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Group FormControls along with rich text editor goes here.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleModalClose} color="primary" autoFocus>
              Submit
            </Button>
            <Button onClick={this.handleModalClose} color="primary">
              Cancel
            </Button>
          </DialogActions>

          </Dialog>
        </div>
      )
    }
}

export default withStyles(styles)(Floater);
