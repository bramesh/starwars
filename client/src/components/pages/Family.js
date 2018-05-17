import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import ContentHeader from '../ContentHeader.js';
import Content from '../Content.js';

class Family extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          <ContentHeader title="Families" />
          <Content />
        </div>
      )} />
    )
  }
}

export default Family;
