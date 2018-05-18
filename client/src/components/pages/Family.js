import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout.js';
import Content from '../Content.js';


class Family extends React.Component {
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

export default Family;
