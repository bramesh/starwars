import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import Content from '../Content.js';

class SchoolInfo extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          Loads of information...
        </div>
      )} />
    )
  }
}

export default SchoolInfo;
