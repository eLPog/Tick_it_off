import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import store from '../../../store';
import { RegisterForm } from './RegisterForm';

describe('Check if RegisterForm page is correctly rendered', () => {
  test('check if all 4 inputs are correctly rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>,
    );
    const inputs = document.getElementsByTagName('input');
    expect(inputs.length === 4).toBeTruthy();
  });
  test('check if all 4 inputs have required attribute', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>,
    );
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      expect(inputs[i]).toHaveAttribute('required');
    }
  });
});
