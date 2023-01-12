import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../../components/Home/Home';

it('Home page Component snapshot test', () => {
  const HomePageRender = TestRenderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(HomePageRender).toMatchSnapshot();
});
