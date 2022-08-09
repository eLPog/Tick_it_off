import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import store from '../../store';
import { Header } from './Header';

describe('Check Header Component', () => {
  test('check if menu div is correctly rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    const [menuDiv] = document.getElementsByClassName('menu');
    expect(menuDiv).toBeTruthy();
    expect(menuDiv).toContainHTML('li');
  });
  test('check if all 4 menu items for not logged user are rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    const menuItem = document.getElementsByTagName('li');
    expect(menuItem.length === 4).toBeTruthy();
  });
});
