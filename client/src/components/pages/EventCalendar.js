import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout.js';
import ContentHeader from '../ContentHeader.js';
import Content from '../Content.js';

class EventCalendar extends React.Component {
  render() {
    return(
      <Layout render={() => (
        <div>
          <ContentHeader title="Event Calendar" />
          Events coming soon...
        </div>
      )} />
    )
  }
}

export default EventCalendar;
