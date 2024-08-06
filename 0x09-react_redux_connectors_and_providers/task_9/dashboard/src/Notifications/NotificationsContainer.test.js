// src/Notifications/NotificationsContainer.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('NotificationsContainer', () => {
  let wrapper;
  const fetchNotificationsMock = jest.fn();
  const setNotificationFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <NotificationsContainer
        notifications={fromJS([])}
        fetchNotifications={fetchNotificationsMock}
        setNotificationFilter={setNotificationFilterMock}
      />
    );
  });

  it('should call fetchNotifications on mount', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});

