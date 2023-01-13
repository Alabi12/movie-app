import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import App from '../App';

describe('Testing App component', () => {
  test('Snapshot testing', () => {
    const myRenderer = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
        ,
      </Provider>,
    );
    const testComponent = myRenderer.toJSON();
    expect(testComponent).toMatchSnapshot();
  });
});
