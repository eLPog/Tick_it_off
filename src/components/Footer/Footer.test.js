import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import store from '../../store';
import { Footer } from './Footer';

describe('Check if footer is rendered correctly', () => {
  test('check if footer has a link to github', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>,
    );
    const linkEl = screen.getByRole('link');
    expect(linkEl).toHaveAttribute('href', 'https://www.github.com/elPog');
  });
});
