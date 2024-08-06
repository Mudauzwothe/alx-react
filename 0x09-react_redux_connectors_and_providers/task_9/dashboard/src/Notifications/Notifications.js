// src/Notifications/Notifications.js

import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ notifications, setNotificationFilter }) => (
  <div>
    <p>Here is the list of notifications</p>
    <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
    <button onClick={() => setNotificationFilter('default')}>💠</button>
    <ul>
      {notifications.map(notification => (
        <li key={notification.get('id')}>
          {notification.get('message')}
        </li>
      ))}
    </ul>
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.instanceOf(Immutable.List).isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

export default Notifications;

