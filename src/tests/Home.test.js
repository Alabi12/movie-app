import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home/Home';

describe('Testing App component', () => {
  test('Snapshot testing', () => {
    const myRenderer = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
        ,
      </Provider>,
    );
    const testComponent = myRenderer.toJSON();
    expect(testComponent).toMatchSnapshot();
  });
});
