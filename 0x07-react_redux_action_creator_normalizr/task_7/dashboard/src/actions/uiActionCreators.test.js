// task_7/dashboard/src/actions/uiActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, login, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when fetching login has been done', () => {
    fetchMock.getOnce('/login-success.json', {
      body: {},
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when fetching login has failed', () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new Error('API failure')
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

