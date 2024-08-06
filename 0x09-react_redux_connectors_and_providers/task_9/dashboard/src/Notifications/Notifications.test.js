// src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const setNotificationFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        notifications={fromJS([
          { id: '1', message: 'Urgent Notification', isRead: false, type: 'urgent' },
          { id: '2', message: 'Default Notification', isRead: false, type: 'default' },
        ])}
        setNotificationFilter={setNotificationFilterMock}
      />
    );
  });

  it('should call setNotificationFilter with "urgent" when the urgent button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('urgent');
  });

  it('should call setNotificationFilter with "default" when the default button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('default');
  });
});

