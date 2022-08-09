import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { WelcomePage } from './WelcomePage';
import store from '../../store';

describe('Check if Welcome page is correctly rendered', () => {
  test('check if all 4 menu items are rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      </Provider>,
    );

    const menuItem = document.getElementsByTagName('article');
    expect(menuItem.length === 4).toBeTruthy();
  });
  test('check if only 1 menu item has activeElement class', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      </Provider>,
    );
    const menuItem = document.getElementsByClassName('activeElement');
    expect(menuItem.length === 1).toBeTruthy();
    expect(menuItem.length > 1).toBeFalsy();
  });
});
