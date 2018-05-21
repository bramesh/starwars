import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Layout from '../Layout.js';
import Content from '../Content.js';
import {getFamilies} from '../../actions/familyActions.js';


class Family extends React.Component {
  componentDidMount() {
    this.props.getFamilies();
  }
  render() {
    const { classes } = this.props;
    return(
      <Layout render={() => (
        <div>
          <Content />
        </div>
      )} />
    )
  }
}

function mapStateToProps(state) {
  return {
    families: state.families.families
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFamilies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Family);
