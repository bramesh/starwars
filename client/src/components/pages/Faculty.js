import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import Content from '../Content.js';

class Faculty extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          Faculty comes up here.
        </div>
      )} />
    )
  }
}

export default Faculty;
