import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import Content from '../Content.js';

class Members extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          Here are the Members...
        </div>
      )} />
    )
  }
}

export default Members;
