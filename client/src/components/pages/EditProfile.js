import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import ContentHeader from '../ContentHeader.js';
import Content from '../Content.js';

class EditProfile extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          <ContentHeader title="Edit Profile" />
          You can see your profile very here soon...
        </div>
      )} />
    )
  }
}

export default EditProfile;
