import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import Content from '../Content.js';

class EditProfile extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          You can see your profile here very soon...
        </div>
      )} />
    )
  }
}

export default EditProfile;
